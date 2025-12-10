import { MakeswiftComponent } from '@makeswift/runtime/next';

import { getComponentSnapshot } from '~/lib/makeswift/client';

import { type ContextProps, ProductFaqsContextProvider } from './client';
import { COMPONENT_TYPE } from './register';

/**
 * This component is used in the page server component, where `ProductFaqs` was directly rendered previously.
 * The component doesn't define UI of its own. Its job is to accept the same props as `ProductFaqs`,
 * set those on a React context, and then "embed" the Makeswift-controlled component that will ultimately
 * render the content.
 */
export async function ProductFaqs({ 
  productId,
  limit,
  faqsCollection,
  heading,
}: ContextProps) {
  const snapshot = await getComponentSnapshot(`product-faqs-${productId}`);

  return (
    <ProductFaqsContextProvider value={{
      productId,
      limit,
      faqsCollection,
      heading,
    }}>
      <MakeswiftComponent
        label="Product FAQs"
        snapshot={snapshot}
        type={COMPONENT_TYPE}
      />
    </ProductFaqsContextProvider>
  );
}
