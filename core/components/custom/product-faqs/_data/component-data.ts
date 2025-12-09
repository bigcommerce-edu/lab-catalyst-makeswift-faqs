import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { cache } from 'react';
import { z } from 'zod';

import { client } from '~/client';
import { FragmentOf, graphql, VariablesOf } from '~/client/graphql';

const FaqMetafieldsFragment = graphql(`
  fragment FaqMetafieldsFragment on Product {

  }
`);

const MetafieldsQuery = graphql(
  `

  `,
  [FaqMetafieldsFragment]
);

const formatFaqs = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  return [];
}

const formatFaqsCollection = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  return {
    endCursor: product.metafields.pageInfo.hasNextPage 
      ? product.metafields.pageInfo.endCursor 
      : null,
    faqs: formatFaqs(product),
  };
};

type Variables = Omit<VariablesOf<typeof MetafieldsQuery>, 'namespace'> 
  & { locale: string };

const getProductFaqMetafields = cache(
  async (variables: Variables) => {
    return Promise.resolve({
      endCursor: null,
      faqs: [],
    });
  }
);

export { formatFaqs, type Variables, getProductFaqMetafields };
