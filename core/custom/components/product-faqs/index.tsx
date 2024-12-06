import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getComponentSnapshot } from '~/lib/makeswift/client';
import { cache } from 'react';

import { client } from '~/client';

import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqsSkeleton } from './faqs';
import { COMPONENT_TYPE } from './register';

const limit = 2;

const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    return Promise.resolve({
      endCursor: '123',
      faqs: [
        {
          key: 'q1',
          question: 'Question 1',
          answer: 'Answer 1',
        },
        {
          key: 'q2',
          question: 'Question 2',
          answer: 'Answer 2',
        }
      ]
    });
  }
);

const ProductFaqs = async ({ productId, productName }: { productId: number, productName: string }) => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(5000);

  const snapshot = await getComponentSnapshot(`product-faqs-${productId}`);
  
  const faqCollection = await getProductFaqMetafields(productId);

  return (
    <ProductFaqsContextProvider value={{
      productId,
      limit,
      faqs: faqCollection.faqs,
      initialEndCursor: faqCollection.endCursor
    }}>
      <MakeswiftComponent
        label={`FAQs for ${productName}`}
        snapshot={snapshot}
        type={COMPONENT_TYPE}
      />
    </ProductFaqsContextProvider>
  );
};

export { getProductFaqMetafields, ProductFaqs, ProductFaqsSkeleton };
