import { Stream, Streamable } from '@/vibes/soul/lib/streamable';

import { Faq, FaqsList } from './faqs-list';
import { LoadMoreFaqs } from './load-more-faqs';

interface FaqsCollection {
  endCursor: string | null;
  faqs: Faq[];
}

interface ProductFaqsProps {
  productId: number;
  heading: string;
  limit: number;
  faqsCollection: Streamable<FaqsCollection>;
  showLoadMore?: boolean;
}

export function ProductFaqs({
  productId,
  heading,
  limit,
  faqsCollection: streamableFaqsCollection,
  showLoadMore = true,
}: ProductFaqsProps) {

  return (
    <Stream fallback={<ProductFaqsSkeleton />} value={streamableFaqsCollection}>
    {(faqsCollection) => (

    <section className="overflow-hidden @container">
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
      <h2 className="font-heading text-2xl leading-none @xl:text-3xl @4xl:text-4xl py-4">
        {heading}
      </h2>
      
      <FaqsList faqs={faqsCollection.faqs} />

      {showLoadMore && (faqsCollection.endCursor !== null) && (
        <LoadMoreFaqs 
          initialEndCursor={faqsCollection.endCursor}
          limit={limit}
          productId={productId}
        />
      )}
    </div>
    </section>

    )}
    </Stream>
  );
}

export function ProductFaqsSkeleton() {
  return (
    <div className="animate-pulse mx-auto md:w-2/3 p-4 items-center">
      <div className="my-3 h-12 w-full rounded-md bg-contrast-100 @md:my-4" />
      <div className="my-3 h-12 w-full rounded-md bg-contrast-100 @md:my-4" />
      <div className="my-3 h-12 w-full rounded-md bg-contrast-100 @md:my-4" />
    </div>  
  );
}
