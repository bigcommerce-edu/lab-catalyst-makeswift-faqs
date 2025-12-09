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
    return (
      <div ref={ref}>
        
      </div>
    );
  },
);