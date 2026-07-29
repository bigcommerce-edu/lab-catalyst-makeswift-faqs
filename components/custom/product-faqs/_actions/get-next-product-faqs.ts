'use server';

import { getProductFaqMetafields, Variables as ProductFaqVariables } from '../_data/component-data';

export const getNextProductFaqs = async(variables: ProductFaqVariables) => {
  // TRY: Un-comment this error to demonstrate the error handling for the "Load More FAQs" feature
  // throw new Error('Could not load more FAQs');
  return await getProductFaqMetafields(variables);
}
