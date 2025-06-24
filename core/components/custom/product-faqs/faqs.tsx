'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ReactNode, useState } from 'react';

import { getNextProductFaqs } from './_actions/get-next-product-faqs';
import { formatFaqs } from './_data/component-data';

export function ProductFaqs({
  productId,
  limit,
  faqs,
  initialEndCursor,
  showLoadMore = true
}: {
  productId?: number;
  limit: number;
  faqs: Array<{
    key: string,
    question: string,
    answer: string | ReactNode
  }>;
  initialEndCursor?: string | null;
  showLoadMore?: boolean;
}) {
  return '';
}

export function ProductFaqsSkeleton() {
  return '';
}
