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
  // TODO: Update `faqsCollection` to be a `Streamable` of the defined type
  faqsCollection: FaqsCollection;
  showLoadMore?: boolean;
}

export function ProductFaqs({
  productId,
  heading,
  limit,
  // TODO: Follow the standard convention by aliasing `faqsCollection` as `streamableFaqsCollection`
  //  - This makes it easy to distinguish the eventual `faqsCollection` value after the streamable value is resolved
  faqsCollection,
  showLoadMore = true,
}: ProductFaqsProps) {

  // TODO: Wrap the existing implementation in `<Stream>`
  //  - `<Stream>` should use `ProductFaqsSkeleton` as the fallback and accept `streamableFaqsCollection` as its value
  //  - The immediate child of `<Stream>` should be a callback function accepting the resolved `faqsCollection`
  //  - The rest of the implementation then remains unchanged, treating `faqsCollection` as before
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
