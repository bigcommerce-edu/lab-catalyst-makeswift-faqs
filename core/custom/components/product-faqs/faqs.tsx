'use client';

import { useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import getNextProductFaqs from './_actions/get-next-product-faqs';
import { formatFaqs } from './_data/component-data';

export const ProductFaqs = ({
  productId,
  limit,
  faqs,
  initialEndCursor,
  showLoadMore = true
}: {
  productId?: number;
  limit: number;
  faqs: {
    key: string,
    question: string,
    answer: string | ReactNode
  }[];
  initialEndCursor?: string | null;
  showLoadMore?: boolean;
}) => {
  return '';
};

export const ProductFaqsSkeleton = () => {
  return '';
};
