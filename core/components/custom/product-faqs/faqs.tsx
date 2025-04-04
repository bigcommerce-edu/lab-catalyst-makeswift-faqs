'use client';

import { useTranslations } from 'next-intl';
import { ReactNode, useState } from 'react';

import { Accordion, AccordionItem } from '@/vibes/soul/primitives/accordion';

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
  const t = useTranslations('Product.FAQ');

  return faqs.length <= 0 ? '' : (
    <section className="overflow-hidden @container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <h2 className="font-heading text-2xl leading-none @xl:text-3xl @4xl:text-4xl">
          {t('heading')}
        </h2>

        <div className="mx-auto md:w-2/3 p-4">

          <Accordion 
            type="multiple"
          >
            {faqs.map(faq => (
              <AccordionItem key={faq.key} title={faq.question} value={faq.key}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
}

export function ProductFaqsSkeleton() {
  return '';
}
