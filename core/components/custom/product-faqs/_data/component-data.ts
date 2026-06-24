import { cache } from 'react';

import { Faq } from '../faqs-list';

import { queryProductFaqs } from './faqs-db';

interface FaqsCollection {
  endCursor: string | null;
  faqs: Faq[];
}

interface Variables {
  productId: number;
  locale: string;
  limit?: number | null;
  after?: string | null;
}

const DEFAULT_LIMIT = 10;

// FAQ pages are addressed by an opaque cursor. Here that cursor is simply the
// row offset encoded as a string, mirroring the relay-style pagination the
// component was originally built against.
const decodeCursor = (after?: string | null): number => {
  const offset = Number(after);

  return Number.isInteger(offset) && offset >= 0 ? offset : 0;
};

const getProductFaqMetafields = cache(
  async (variables: Variables): Promise<FaqsCollection> => {
    // Artificial delay so the streaming skeleton/loading states remain
    // observable in the lab, just as with the original network request.
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const { productId, locale, after } = variables;
    const limit = variables.limit ?? DEFAULT_LIMIT;
    const offset = decodeCursor(after);

    const { faqs, hasNextPage } = queryProductFaqs({ productId, locale, limit, offset });

    return {
      endCursor: hasNextPage ? String(offset + faqs.length) : null,
      faqs: faqs.map((faq) => ({
        // Namespace the database id so these keys never collide with the
        // index-based keys the Makeswift integration assigns to author-added
        // FAQs when the two sets are merged into a single accordion.
        key: `faq-${faq.id}`,
        question: faq.question,
        answer: faq.answer,
      })),
    };
  }
);

export { type FaqsCollection, type Variables, getProductFaqMetafields };
