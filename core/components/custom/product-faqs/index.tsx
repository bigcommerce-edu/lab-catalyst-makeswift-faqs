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
  faqsCollection: FaqsCollection;
  showLoadMore?: boolean;
}

export function ProductFaqs({
  productId,
  heading,
  limit,
  faqsCollection,
  showLoadMore = true,
}: ProductFaqsProps) {
  return (
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
  );
}

export function ProductFaqsSkeleton() {
  // TODO: Flesh out the skeleton component using simple Tailwind classes, including for animation
  return (
    <></>
  );
}
