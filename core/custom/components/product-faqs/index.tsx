import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getComponentSnapshot } from '~/lib/makeswift/client';
import { cache } from 'react';

import { client } from '~/client';

import { Stream } from '@/vibes/soul/lib/streamable';
import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqs as ProductFaqsComponent, ProductFaqsSkeleton } from './faqs';
import { COMPONENT_TYPE } from './register';

const limit = 2;

const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    await sleep(5000);

    const response = await client.fetch({
      document: MetafieldsQuery,
      variables: {
        productId,
        limit,
      },
    });

    const product = response.data.site.product;

    if (!product?.metafields) {
      return { productName: '', endCursor: null, faqs: [] };
    }

    return formatFaqsCollection(product);
  }
);

const ProductFaqs = async ({ productId }: { productId: number }) => {
  const faqCollectionPromise = getProductFaqMetafields(productId);

  return (
    <Stream fallback={<ProductFaqsSkeleton />} 
      value={faqCollectionPromise}>

      {(faqCollection) => (
        <ProductFaqsComponent faqs={faqCollection.faqs} initialEndCursor={faqCollection.endCursor}
          limit={limit} productId={productId} />
      )}

    </Stream>
  );
};

export { getProductFaqMetafields, ProductFaqs };
