'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import { getNextProductFaqs } from './_actions/get-next-product-faqs';
import { Faq, FaqsList } from './faqs-list';

interface LoadMoreFaqsProps {
  // TODO: Add new props to the component interface
  //  - `productId` should be a number
  //  - `limit` should be a number
  //  - `initialEndCursor` should be a string or null
}

export function LoadMoreFaqs({
  // TODO: Add new props to the destructuring
}: LoadMoreFaqsProps) {
  // TODO: Use `useLocale` and `useTranslations` to get the `Product.FAQ` translations (for the `loadMore` string)

  // TODO: Establish state values to track `faqs` and `endCursor`
  //  - `faqs` will track an array of "more" `Faq` objects to be rendered
  //  - `endCursor` will track the end cursor of the most recently fetched "page." `initialEndCursor` should be the initial value.

  // TODO: Create the `getNextFaqs` async function
  //  - Use the `getNextProductFaqs` server action to fetch the next "page" of FAQs
  //    - Pass the `productId`, `locale`, `limit`, and `after` variables (use `endCursor` for `after`)
  //    - The server action will run the same GraphQL query as the initial fetch, but with the appropriate cursor
  //  - Concatenate the `faqs` from the response to the existing `faqs` state
  //  - Also set the `endCursor` state with the new end cursor

  // TODO: Fill in the JSX implementation
  //  - Use the same component used for the initial FAQs - `FaqsList` - to render the "more" FAQs
  //  - Render a `Button` from the core component library, which should trigger `getNextFaqs` when clicked
  return (
    <></>
  );
}
