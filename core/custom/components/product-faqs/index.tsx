import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getComponentSnapshot } from '~/lib/makeswift/client';
import { cache } from 'react';

import { client } from '~/client';

import { Stream } from '@/vibes/soul/lib/streamable';
import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqsSkeleton } from './faqs';
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
  const snapshotPromise = getComponentSnapshot(`product-faqs-${productId}`);
  const faqCollectionPromise = getProductFaqMetafields(productId);

  return (
    <Stream fallback={<ProductFaqsSkeleton />} 
      value={Promise.all([ snapshotPromise, faqCollectionPromise ])}>

      {([ snapshot, faqCollection ]) => (
        <ProductFaqsContextProvider value={{
          productId,
          limit,
          faqs: faqCollection.faqs,
          initialEndCursor: faqCollection.endCursor
        }}>
          <MakeswiftComponent
            label={`FAQs for ${faqCollection.productName}`}
            snapshot={snapshot}
            type={COMPONENT_TYPE}
          />
        </ProductFaqsContextProvider>
      )}

    </Stream>
  );
};

export { getProductFaqMetafields, ProductFaqs };
