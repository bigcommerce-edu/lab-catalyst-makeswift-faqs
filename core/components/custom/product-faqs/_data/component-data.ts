import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { cache } from 'react';
import { z } from 'zod';

import { client } from '~/client';
import { FragmentOf, graphql, VariablesOf } from '~/client/graphql';

// TODO: Fill in the contents of the `FaqMetafieldsFragment` fragment
//  - Query the `metafields` field using the $namespace, $limit and $after variables for its arguments
//  - Query the `pageInfo` of `metafields`, making sure to include `hasNextPage` and `endCursor`
//  - Query `edges` of `metafields`, including the key and value of each `node`
const FaqMetafieldsFragment = graphql(`
  fragment FaqMetafieldsFragment on Product {

  }
`);

// TODO: Fill in the main GraphQL query
//  - Expose variables for $productId, $namespace, $limit, and $after
//  - Use the `site.product` query, filtering based on $productId
//  - Use the `FaqMetafieldsFragment` for the sub-fields to query
const MetafieldsQuery = graphql(
  `

  `,
  [FaqMetafieldsFragment]
);

// TODO: Use zod to create a `FaqMetafield` schema
//  - This defines what the contents of a FAQ metafield JSON should look like and will be used to validate
//  - Use `z.object` and `z.string` to create the schema
//  - Each FAQ should have `key`, `question` and `answer` strings

const formatFaqs = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  // TODO: Replace the empty return with the correct formatting logic
  //  - This method accepts the product object returned from GraphQL and decodes/formats each FAQ metafield
  //  - Use `removeEdgesAndNodes` to extract the flat array of nodes from `product.metafields`
  //  - For each field, create an object including:
  //    - The decoded JSON from `value` (which should include a `question` and `answer`)
  //    - A `key` based directly on the metafield key
  //  - Use the `parse` method of the `FaqMetafield` schema to validate the resulting object
  //  - Return the array of validated FAQ objects
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
    // TODO: Add in a "fake" delay of 5 seconds
    //  - This is as simple as awaiting a new promise with a `setTimeout` to resolve it

    // TODO: Replace the empty return with the correct fetch logic
    //  - Extract `locale` from the passed variables. The rest of the variables should be passed directly to GraphQL.
    //  - Use `client.fetch` with the `MetafieldsQuery` document
    //  - The `namespace` variable passed to the GraphQL query should be in the form "FAQ|${locale}"
    //  - Extract `data.site.product` from the response and use `formatFaqsCollection` to format the metafields
    //  - Return a collection object including the `endCursor` and `faqs` array
    return Promise.resolve({
      endCursor: null,
      faqs: [],
    });
  }
);

export { formatFaqs, type Variables, getProductFaqMetafields };
