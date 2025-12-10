'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/vibes/soul/primitives/button';

import { getNextProductFaqs } from './_actions/get-next-product-faqs';
import { Faq, FaqsList } from './faqs-list';

interface LoadMoreFaqsProps {
  productId: number;
  limit: number;
  initialEndCursor: string | null;
}

export function LoadMoreFaqs({
  productId,
  limit,
  initialEndCursor,
}: LoadMoreFaqsProps) {
  const locale = useLocale();
  const t = useTranslations('Product.FAQ');

  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [endCursor, setEndCursor] = useState<string | null>(initialEndCursor);
  const [pending, setPending] = useState(false);

  const getNextFaqs = async () => {
    if (!productId) {
      return;
    }

    setPending(true);

    try {
      const nextFaqData = await getNextProductFaqs({ productId, locale, limit, after: endCursor });

      setEndCursor(nextFaqData.endCursor);
      setFaqs(faqs.concat(nextFaqData.faqs));
    } catch (err) {
      // Handle error
    }

    setPending(false);
  };

  return (
    <>
      {faqs.length > 0 && (
        <FaqsList faqs={faqs} />
      )}

      {(endCursor !== null) && (
        <div className="mx-auto md:w-2/3 lg:w-1/3 text-center py-4">
          <Button
            loading={pending}
            onClick={getNextFaqs}
            variant="secondary"
          >
            {t('loadMore')}
          </Button>
        </div>
      )}
    </>
  );
}
