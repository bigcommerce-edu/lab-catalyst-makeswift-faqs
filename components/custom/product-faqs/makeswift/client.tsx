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

interface ProductFaq {
  question: string;
  answer: string;
  richContent: boolean;
  content: ReactNode;
}

interface ProductFaqsProps {
  faqs: ProductFaq[];
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
      faqs,
      // TODO: Add the `showOriginal` prop to the destructuring
    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { productId, limit, faqsCollection: streamableFaqsCollection, heading } = useContext(ProductFaqsContext);

    const formattedFaqs = faqs.map(
      (faq, index) => {
        return {
          key: index.toString(),
          question: faq.question,
          answer: (faq.richContent) ? faq.content : faq.answer,
        };
      }
    );

    return (
      <Stream fallback={<ProductFaqsSkeleton />} value={streamableFaqsCollection}>
      {(passedFaqsCollection) => {

        const allFaqs = formattedFaqs.concat(
          // TODO: Whether to concatentate `passedFaqsCollection.faqs` should now be conditional
          //  - If `showOriginal` is false, we're not showing metafield-based FAQs at all, so the final list should just be the original `formattedFaqs`
          passedFaqsCollection.faqs
        );

        const allFaqsCollection = {
          // TODO: Whether we include the `endCursor` should now be conditional
          //  - If `showOriginal` is false, we're not showing metafield-based FAQs at all, so no `endCursor` should be included
          endCursor: passedFaqsCollection.endCursor,
          faqs: allFaqs,
        };

        return (
          <div ref={ref}>
            <ProductFaqs 
              faqsCollection={allFaqsCollection} 
              heading={heading}
              limit={limit} 
              productId={productId} 
              // TODO: Update `showLoadMore` to be conditional based on `showOriginal`
              showLoadMore={true}
            />
          </div>
        );

      }}
      </Stream>
    );
  },
);