'use client';

import React, {
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  type PropsWithChildren,
  type Ref,
  useContext,
} from 'react';

import { Stream } from '@/vibes/soul/lib/streamable';

import { ProductFaqs, ProductFaqsSkeleton } from '../index';

import { type AuthoredFaq, combineFaqsCollections, formatAuthoredFaqs } from './merge-faqs';

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
  faqs: AuthoredFaq[];
  showOriginal: boolean;
}

/**
 * This client component is registered with the Makeswift editor.
 * It doesn't include UI of its own, but instead is responsible for combining server-side context values
 * with the Makeswift-controlled props to render `ProductFaqs`.
 */
export const MakeswiftProductFaqs = forwardRef(
  (
    {
      faqs,
      showOriginal
    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { productId, limit, faqsCollection: streamableFaqsCollection, heading } = useContext(ProductFaqsContext);

    const formattedFaqs = formatAuthoredFaqs(faqs);

    return (
      <Stream fallback={<ProductFaqsSkeleton />} value={streamableFaqsCollection}>
      {(passedFaqsCollection) => {

        const allFaqsCollection = combineFaqsCollections(
          formattedFaqs,
          passedFaqsCollection,
          showOriginal
        );

        return (
          <div ref={ref}>
            <ProductFaqs 
              faqsCollection={allFaqsCollection} 
              heading={heading}
              limit={limit} 
              productId={productId} 
              showLoadMore={showOriginal}
            />
          </div>
        );

      }}
      </Stream>
    );
  },
);