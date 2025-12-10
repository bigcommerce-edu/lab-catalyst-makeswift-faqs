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
  // TODO: Add a `showLoadMore` prop, which should be a boolean
  //  - "Load More" will always be shown for now, but exposing this prop allows more flexibility for future implementation
}

export function ProductFaqs({
  productId,
  heading,
  limit,
  faqsCollection,
  // TODO: Add the `showLoadMore` prop to the destructuring
  //  - Set a default value of `true`
}: ProductFaqsProps) {
  // TODO: Remove this after FAQ information is being rendered
  console.log(faqsCollection);

  return (
    <section className="overflow-hidden @container">
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
      <h2 className="font-heading text-2xl leading-none @xl:text-3xl @4xl:text-4xl py-4">
        {heading}
      </h2>
      {/* TODO: Replace this placeholder with the `FaqsList` component 
            - `faqsCollection.faqs` contains the array to pass to the `faqs` prop
      */}
      <p>FAQs for product ID {productId}</p>
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
