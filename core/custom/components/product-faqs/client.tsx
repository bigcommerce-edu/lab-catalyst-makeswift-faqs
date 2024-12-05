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
import { ProductFaqs } from './faqs';

type ContextProps = ComponentPropsWithoutRef<typeof ProductFaqs>;

const ProductFaqsContext = createContext<ContextProps>({
  limit: 10,
  faqs: [],
});

export const ProductFaqsContextProvider = (
  { value, children }: PropsWithChildren<{ value: ContextProps }>
) => (
  <ProductFaqsContext.Provider value={value}>{children}</ProductFaqsContext.Provider>
);

interface ProductFaqsProps {

}

export const MakeswiftProductFaqs = forwardRef(
  (
    {

    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { productId, limit, faqs: passedFaqs, initialEndCursor } = useContext(ProductFaqsContext);

    return (
      <div ref={ref}>
        <ProductFaqs 
          faqs={passedFaqs} 
          initialEndCursor={initialEndCursor}
          limit={limit} 
          productId={productId} 
          showLoadMore={true} 
          />
      </div>
    );
  },
);