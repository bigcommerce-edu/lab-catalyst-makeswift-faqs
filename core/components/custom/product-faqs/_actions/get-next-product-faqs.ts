'use server';

import { getProductFaqMetafields, Variables as ProductFaqVariables } from '../_data/component-data';

export const getNextProductFaqs = async(variables: ProductFaqVariables) => {
  // TODO: Replace the empty return with a call-through to `getProductFaqMetafields`
  //  - This utilizes the same GraphQL query used by the page server component to fetch initial FAQs
  return Promise.resolve({
    endCursor: null,
    faqs: [],
  });
}
