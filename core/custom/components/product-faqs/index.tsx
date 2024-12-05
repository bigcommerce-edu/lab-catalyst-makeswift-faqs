import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getComponentSnapshot } from '~/lib/makeswift/client';
import { cache } from 'react';

import { client } from '~/client';

import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqs as ProductFaqsComponent, ProductFaqsSkeleton } from './faqs';
import { COMPONENT_TYPE } from './register';

const limit = 2;

const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    const response = await client.fetch({
      document: MetafieldsQuery,
      variables: {
        productId,
        limit,
      },
    });

    const product = response.data.site.product;

    if (!product?.metafields) {
      return { endCursor: null, faqs: [] };
    }

    return formatFaqsCollection(product);
  }
);

const ProductFaqs = async ({ productId, productName }: { productId: number, productName: string }) => {
  const faqCollection = await getProductFaqMetafields(productId);

  return <ProductFaqsComponent faqs={faqCollection.faqs} initialEndCursor={faqCollection.endCursor}
    limit={limit} productId={productId} />
};

export { getProductFaqMetafields, ProductFaqs, ProductFaqsSkeleton };
