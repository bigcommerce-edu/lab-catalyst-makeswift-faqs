'use client';

import React, {
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
  useContext,
} from 'react';

import { Stream } from '@/vibes/soul/lib/streamable';

import { ProductFaqs, ProductFaqsSkeleton } from '../index';

export type ContextProps = ComponentPropsWithoutRef<typeof ProductFaqs>;

const ProductFaqsContext = createContext<ContextProps>({
  productId: 0,
  heading: '',
  limit: 10,
  faqsCollection: { endCursor: null, faqs: [] },
});

export const ProductFaqsContextProvider = (
  { value, children }: PropsWithChildren<{ value: ContextProps }>
) => (
  <ProductFaqsContext.Provider value={value}>{children}</ProductFaqsContext.Provider>
);

interface ProductFaqsProps {

}

/**
 * This client component is registered with the Makeswift editor.
 * It doesn't include UI of its own, but instead is responsible for combining server-side context values
 * with the Makeswift-controlled props to render `ProductFaqs`.
 */
export const MakeswiftProductFaqs = forwardRef(
  (
    {

    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { productId, limit, faqsCollection: streamableFaqsCollection, heading } = useContext(ProductFaqsContext);

    return (
      <Stream fallback={<ProductFaqsSkeleton />} value={streamableFaqsCollection}>
      {(passedFaqsCollection) => {

        return (
          <div ref={ref}>
            <ProductFaqs 
              faqsCollection={passedFaqsCollection} 
              heading={heading}
              limit={limit} 
              productId={productId} 
              showLoadMore={true}
            />
          </div>
        );

      }}
      </Stream>
    );
  },
);