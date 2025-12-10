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

// TODO: Add `ProductFaq` interface to define what each FAQ item from the Makeswift control should look like
//  - `question` and `answer` should be strings

interface ProductFaqsProps {
  // TODO: Add the `faqs` prop, which should be an array of `ProductFaq` items
  // TODO: Add the `showOriginal` prop, which should be a boolean
}

/**
 * This client component is registered with the Makeswift editor.
 * It doesn't include UI of its own, but instead is responsible for combining server-side context values
 * with the Makeswift-controlled props to render `ProductFaqs`.
 */
export const MakeswiftProductFaqs = forwardRef(
  (
    {
      // TODO: Add the `faqs` prop to the destructuring
      // TODO: Add the `showOriginal` prop to the destructuring
    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { productId, limit, faqsCollection: streamableFaqsCollection, heading } = useContext(ProductFaqsContext);

    // TODO: Reformat the faqs that were passed in as a prop (controlled by Makeswift)
    //  - Each item already has a `question` and `answer` property
    //  - The main component also expects a `key` on each, so use each item's index to add this key
    //  - Store the result in a new variable called `formattedFaqs`

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