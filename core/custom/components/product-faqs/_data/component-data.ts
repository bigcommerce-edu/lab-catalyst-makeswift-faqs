import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { z } from 'zod';
import { FragmentOf, graphql } from '~/client/graphql';

export const FaqMetafieldsFragment = graphql(`
  fragment FaqMetafieldsFragment on Product {
    name
    metafields(namespace: "FAQ", first: $limit, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          key
          value
        }
      }
    }
  }
`);

export const MetafieldsQuery = graphql(
  `
    query getProductFaqMetafields($productId: Int!, $limit: Int, $after: String) {
      site {
        product(entityId: $productId) {
          ...FaqMetafieldsFragment
        }
      }
    }
  `,
  [FaqMetafieldsFragment]
);

const FaqMetafield = z.object({
  key: z.string(),
  question: z.string(),
  answer: z.string(),
});

export const formatFaqs = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  const fields = removeEdgesAndNodes(product.metafields);

  return fields
    .map((field) => {
      try {
        return FaqMetafield.parse({
          ...JSON.parse(field.value),
          key: field.key,
        });
      } catch (err) {
        console.log(err);
        
        return { key: '', question: '', answer: '' };
      }
    })
    .filter((field) => field.key.trim().length > 0);
}

export const formatFaqsCollection = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  return {
    productName: product.name,
    endCursor: product.metafields.pageInfo.hasNextPage 
      ? product.metafields.pageInfo.endCursor 
      : null,
    faqs: formatFaqs(product),
  };
};