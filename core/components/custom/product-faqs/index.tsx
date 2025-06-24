import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getLocale } from 'next-intl/server';

import { getComponentSnapshot } from '~/lib/makeswift/client';

import { getProductFaqMetafields } from './_data/component-data';
import { ProductFaqsContextProvider } from './client';
import { ProductFaqs as ProductFaqsComponent } from './faqs';
import { COMPONENT_TYPE } from './register';

const limit = 2;

export async function ProductFaqs({ productId }: { productId: number }) {
  const locale = await getLocale();

  const faqCollection = await getProductFaqMetafields({ productId, locale, limit });
  console.log(faqCollection);

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10">
      FAQ placeholder content for product {productId}
    </div>
  );
}
