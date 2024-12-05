'use client';

import { useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions';

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
  const t = useTranslations('Product.FAQ');

  return faqs.length <= 0 ? '' : (
    <section className="overflow-hidden @container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <h2 className="font-heading text-2xl leading-none @xl:text-3xl @4xl:text-4xl">
          {t('heading')}
        </h2>

        <div className="mx-auto md:w-2/3 p-4">

          <Accordions type="multiple">
            {faqs.map(faq => (
              <Accordion key={faq.key} title={faq.question} value={faq.key}>
                {faq.answer}
              </Accordion>
            ))}
          </Accordions>

        </div>
      </div>
    </section>
  );
};

export const ProductFaqsSkeleton = () => {
  return '';
};
