import { describe, expect, it } from 'vitest';

import { buildFaqsCollection, decodeCursor } from './component-data';

describe('decodeCursor', () => {
  it('defaults to 0 for missing or invalid cursors', () => {
    expect(decodeCursor(null)).toBe(0);
    expect(decodeCursor(undefined)).toBe(0);
    expect(decodeCursor('')).toBe(0);
    expect(decodeCursor('abc')).toBe(0);
    expect(decodeCursor('-1')).toBe(0);
  });

  it('parses a non-negative integer offset', () => {
    expect(decodeCursor('0')).toBe(0);
    expect(decodeCursor('3')).toBe(3);
  });
});

describe('buildFaqsCollection', () => {
  const rows = [
    { id: 1, product_id: 117, locale: 'en', question: 'Q1', answer: 'A1' },
    { id: 2, product_id: 117, locale: 'en', question: 'Q2', answer: 'A2' },
  ];

  it('namespaces each key with the database id', () => {
    const { faqs } = buildFaqsCollection({ rows, offset: 0, hasNextPage: false });

    expect(faqs.map((faq) => faq.key)).toEqual(['faq-1', 'faq-2']);
    expect(faqs[0]).toMatchObject({ question: 'Q1', answer: 'A1' });
  });

  it('encodes the next cursor as offset + page size when more remain', () => {
    expect(buildFaqsCollection({ rows, offset: 4, hasNextPage: true }).endCursor).toBe('6');
  });

  it('returns a null cursor on the last page', () => {
    expect(buildFaqsCollection({ rows, offset: 4, hasNextPage: false }).endCursor).toBeNull();
  });
});
