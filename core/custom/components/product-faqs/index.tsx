import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getComponentSnapshot } from '~/lib/makeswift/client';
import { cache } from 'react';

import { client } from '~/client';

import { Stream } from '@/vibes/soul/lib/streamable';
import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqs as ProductFaqsComponent, ProductFaqsSkeleton } from './faqs';
import { COMPONENT_TYPE } from './register';

const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    return Promise.resolve({
      endCursor: null,
      faqs: [],
    });
  }
);

const ProductFaqs = async ({ productId, productName }: { productId: number, productName: string }) => {
  return Promise.resolve(null);
};

export { getProductFaqMetafields, ProductFaqs };
