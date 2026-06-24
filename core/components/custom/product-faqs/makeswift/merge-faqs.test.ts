import { describe, expect, it } from 'vitest';

import { buildFaqsCollection, type FaqsCollection } from '../_data/component-data';

import { combineFaqsCollections, formatAuthoredFaqs } from './merge-faqs';

describe('formatAuthoredFaqs', () => {
  it('keys authored FAQs by their array index', () => {
    const faqs = formatAuthoredFaqs([
      { question: 'Q1', answer: 'A1', content: 'slot-1' },
      { question: 'Q2', answer: 'A2', content: 'slot-2' },
    ]);

    expect(faqs.map((faq) => faq.key)).toEqual(['0', '1']);
  });

  it('uses the text answer when one is provided', () => {
    const [faq] = formatAuthoredFaqs([{ question: 'Q', answer: 'Real answer', content: 'slot' }]);

    expect(faq?.answer).toBe('Real answer');
  });

  it('falls back to the content slot when the answer is empty or whitespace', () => {
    const slot = 'rich-content-slot';

    const faqs = formatAuthoredFaqs([
      { question: 'Q1', answer: '', content: slot },
      { question: 'Q2', answer: '   ', content: slot },
    ]);

    expect(faqs[0]?.answer).toBe(slot);
    expect(faqs[1]?.answer).toBe(slot);
  });
});

describe('combineFaqsCollections', () => {
  const original: FaqsCollection = {
    endCursor: '2',
    faqs: [
      { key: 'faq-1', question: 'Original 1', answer: 'A1' },
      { key: 'faq-2', question: 'Original 2', answer: 'A2' },
    ],
  };

  const authored = formatAuthoredFaqs([
    { question: 'Authored 1', answer: 'A1', content: 'slot' },
    { question: 'Authored 2', answer: 'A2', content: 'slot' },
  ]);

  it('appends the original FAQs and keeps its cursor when showOriginal is true', () => {
    const result = combineFaqsCollections(authored, original, true);

    expect(result.faqs).toHaveLength(4);
    expect(result.faqs.slice(0, 2).map((faq) => faq.question)).toEqual([
      'Authored 1',
      'Authored 2',
    ]);
    expect(result.endCursor).toBe('2');
  });

  it('drops the original FAQs and cursor when showOriginal is false', () => {
    const result = combineFaqsCollections(authored, original, false);

    expect(result.faqs).toHaveLength(2);
    expect(result.endCursor).toBeNull();
  });

  // Regression for the duplicate-key bug: database keys (built by
  // buildFaqsCollection) must never collide with the index-based authored keys
  // when both sets are merged into a single accordion. Built from real rows so
  // dropping the `faq-` namespacing in component-data would fail this test.
  it('produces unique keys when merged with database-built FAQs', () => {
    const fromDatabase = buildFaqsCollection({
      rows: [
        { id: 1, product_id: 117, locale: 'en', question: 'Original 1', answer: 'A1' },
        { id: 2, product_id: 117, locale: 'en', question: 'Original 2', answer: 'A2' },
      ],
      offset: 0,
      hasNextPage: false,
    });

    const result = combineFaqsCollections(authored, fromDatabase, true);
    const keys = result.faqs.map((faq) => faq.key);

    expect(new Set(keys).size).toBe(keys.length);
    expect(keys).toEqual(['0', '1', 'faq-1', 'faq-2']);
  });
});
