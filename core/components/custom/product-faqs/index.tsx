import { Faq, FaqsList } from './faqs-list';
import { LoadMoreFaqs } from './load-more-faqs';

// TODO: Add a `FaqsCollection` interface
//  - `endCursor` should be a string or null
//  - `faqs` should be an array of the `Faq` type we already have from `FaqsList`

interface ProductFaqsProps {
  // TODO: Add `productId` and `heading` to the props interface
  // TODO: Add the `limit` and `faqsCollection` props
  //  - `limit` should be a number
  //  - `faqsCollection` should be a `FaqsCollection` type
  // TODO: Add a `showLoadMore` prop, which should be a boolean
  //  - "Load More" will always be shown for now, but exposing this prop allows more flexibility for future implementation
}

export function ProductFaqs({
  // TODO: Add `productId` and `heading` to the props destructuring
  // TODO: Add the `limit` and `faqsCollection` props to the destructuring
  // TODO: Add the `showLoadMore` prop to the destructuring
  //  - Set a default value of `true`
}: ProductFaqsProps) {
  // TODO: Temporarily log the contents of `faqsCollection`

  // TODO: Fill in the basic placeholder content
  //  - Render a heading with the `heading` text
  //  - Render placeholder text including the `productId`
  return (
    <></>
  );
}

export function ProductFaqsSkeleton() {
  // TODO: Flesh out the skeleton component using simple Tailwind classes, including for animation
  return (
    <></>
  );
}
