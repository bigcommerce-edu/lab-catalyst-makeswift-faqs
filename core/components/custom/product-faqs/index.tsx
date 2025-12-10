import { Faq, FaqsList } from './faqs-list';
import { LoadMoreFaqs } from './load-more-faqs';

// TODO: Add a `FaqsCollection` interface
//  - `endCursor` should be a string or null
//  - `faqs` should be an array of the `Faq` type we already have from `FaqsList`

interface ProductFaqsProps {
  productId: number;
  heading: string;
  // TODO: Add the `limit` and `faqsCollection` props
  //  - `limit` should be a number
  //  - `faqsCollection` should be a `FaqsCollection` type
  // TODO: Add a `showLoadMore` prop, which should be a boolean
  //  - "Load More" will always be shown for now, but exposing this prop allows more flexibility for future implementation
}

export function ProductFaqs({
  productId,
  heading,
  // TODO: Add the `limit` and `faqsCollection` props to the destructuring
  // TODO: Add the `showLoadMore` prop to the destructuring
  //  - Set a default value of `true`
}: ProductFaqsProps) {
  // TODO: Temporarily log the contents of `faqsCollection`

  return (
    <section className="overflow-hidden @container">
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
      <h2 className="font-heading text-2xl leading-none @xl:text-3xl @4xl:text-4xl py-4">
        {heading}
      </h2>
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
