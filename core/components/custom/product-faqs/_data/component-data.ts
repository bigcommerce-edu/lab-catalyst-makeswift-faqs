import { cache } from 'react';

import { Faq } from '../faqs-list';

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

const getProductFaqMetafields = cache(
  async (_variables: Variables): Promise<FaqsCollection> => {
    // TODO: Fetch the product FAQs for the given product and locale from the
    // local SQLite database, applying cursor-based pagination.
    return { endCursor: null, faqs: [] };
  }
);

export { type FaqsCollection, type Variables, getProductFaqMetafields };
