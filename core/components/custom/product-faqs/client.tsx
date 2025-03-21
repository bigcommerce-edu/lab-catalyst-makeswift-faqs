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

export const ProductFaqsContextProvider = (
  { value, children }: PropsWithChildren<{ value: ContextProps }>
) => (
  <div />
);

interface ProductFaqsProps {

}

export const MakeswiftProductFaqs = forwardRef(
  (
    {

    }: ProductFaqsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref}>
        
      </div>
    );
  },
);