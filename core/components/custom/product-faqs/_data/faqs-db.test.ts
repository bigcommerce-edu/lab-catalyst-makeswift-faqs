import { describe, expect, it } from 'vitest';

import { createFaqsDatabase, queryFaqs, seedFaqs } from './faqs-db';

describe('createFaqsDatabase', () => {
  it('seeds five FAQs for product 117 in the en locale', () => {
    const db = createFaqsDatabase(':memory:');

    const { faqs, hasNextPage } = queryFaqs(db, {
      productId: 117,
      locale: 'en',
      limit: 100,
      offset: 0,
    });

    expect(faqs).toHaveLength(5);
    expect(hasNextPage).toBe(false);
    expect(faqs[0]?.question).toBe('What material is this product made from?');
  });

  it('does not duplicate seed data when seeded again', () => {
    const db = createFaqsDatabase(':memory:');

    seedFaqs(db);
    seedFaqs(db);

    const { faqs } = queryFaqs(db, { productId: 117, locale: 'en', limit: 100, offset: 0 });

    expect(faqs).toHaveLength(5);
  });
});

describe('queryFaqs pagination', () => {
  it('walks the seeded FAQs two at a time', () => {
    const db = createFaqsDatabase(':memory:');
    const params = { productId: 117, locale: 'en', limit: 2 };

    const page1 = queryFaqs(db, { ...params, offset: 0 });
    const page2 = queryFaqs(db, { ...params, offset: 2 });
    const page3 = queryFaqs(db, { ...params, offset: 4 });

    expect(page1.faqs).toHaveLength(2);
    expect(page1.hasNextPage).toBe(true);
    expect(page2.faqs).toHaveLength(2);
    expect(page2.hasNextPage).toBe(true);
    expect(page3.faqs).toHaveLength(1);
    expect(page3.hasNextPage).toBe(false);
  });

  it('reports no next page when the limit covers the remaining rows', () => {
    const db = createFaqsDatabase(':memory:');

    const exact = queryFaqs(db, { productId: 117, locale: 'en', limit: 5, offset: 0 });
    const under = queryFaqs(db, { productId: 117, locale: 'en', limit: 4, offset: 0 });

    expect(exact.faqs).toHaveLength(5);
    expect(exact.hasNextPage).toBe(false);
    expect(under.faqs).toHaveLength(4);
    expect(under.hasNextPage).toBe(true);
  });
});

describe('queryFaqs filtering', () => {
  it('only returns rows matching the product id and locale', () => {
    const db = createFaqsDatabase(':memory:');

    const insert = db.prepare(
      `INSERT INTO product_faqs (product_id, locale, question, answer) VALUES (?, ?, ?, ?)`
    );

    insert.run(200, 'en', 'Different product question', 'Different product answer');
    insert.run(117, 'fr', 'Question en francais', 'Reponse en francais');

    const { faqs } = queryFaqs(db, { productId: 117, locale: 'en', limit: 100, offset: 0 });

    expect(faqs).toHaveLength(5);
    expect(faqs.every((faq) => faq.product_id === 117 && faq.locale === 'en')).toBe(true);
  });
});
