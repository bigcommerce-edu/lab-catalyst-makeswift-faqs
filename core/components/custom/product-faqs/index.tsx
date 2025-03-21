import { MakeswiftComponent } from '@makeswift/runtime/next';

import { getComponentSnapshot } from '~/lib/makeswift/client';

import { getProductFaqMetafields } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqs as ProductFaqsComponent } from './faqs';
import { COMPONENT_TYPE } from './register';

const limit = 2;

export async function ProductFaqs({ productId }: { productId: number }) {
  const faqCollection = await getProductFaqMetafields({ productId, limit });

  return (
    <ProductFaqsComponent faqs={faqCollection.faqs} initialEndCursor={faqCollection.endCursor}
      limit={limit} productId={productId} />
  );
}
