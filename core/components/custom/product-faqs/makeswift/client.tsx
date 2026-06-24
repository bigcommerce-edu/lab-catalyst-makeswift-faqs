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

// TODO: Initialize `ProductFaqsContext` with `createContext`
//  - This creates a React context object that will accept the same values as the props of `ProductFaqs`
//  - Initialize with an object with empty or static values for `productId`, `heading`, `limit`, and `faqsCollection`
//  - The initial value for `faqsCollection` should mimic the basic structure (endCursor and faqs array) with empty values

// TODO: Update this component to render `ProductFaqsContext.Provider`
//  - This is a typical pattern to supply a context provider that components can use to wrap their content and set context values
//  - Use `value` and `children` from the callback params as the `value` prop of `Provider` and the child rendered content
export const ProductFaqsContextProvider = (
  { value, children }: PropsWithChildren<{ value: ContextProps }>
) => (
  <></>
);

interface ProductFaqsProps {

}

export const MakeswiftProductFaqs = forwardRef(
  (
    {

    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    // TODO: Use `useContext` and `ProductFaqsContext` to access the context values
    //  - This will fetch whatever values have been set by wrapping components using `ProductFaqsContextProvider`
    //  - Destructure `productId`, `heading`, `limit`, and `faqsCollection` from the context values
    //  - Use the common pattern to alias `faqsCollection` as `streamableFaqsCollection`

    // TODO: Implement the main JSX
    //  - Repeat the `<Stream>` pattern with the appropriate fallback and callback
    //    - This works the same way as in `ProductFaqs`. 
    //    - We're awaiting the streamable value here because we need to intercept and modify the faqs list later.
    //    - `ProductFaqs` doesn't need to change, as it's already flexible enough to accept a value that's already resolved.
    //  - Within the callback, simply render `ProductFaqs`, passing the context values as props
    return (
      <div ref={ref}>
        
      </div>
    );
  },
);