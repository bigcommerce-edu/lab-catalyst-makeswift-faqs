import { ReactNode } from 'react';

export interface Faq {
  key: string;
  question: string;
  // TODO: Update the type of `answer` to allow a `ReactNode` as well as a string
  //  - This accounts for answers that were provided by Makeswift as a content slot
  answer: string;
}

interface FaqsListProps {
  // TODO: Add the `faqs` prop, which should be an array of `Faq` objects
}

export function FaqsList({
  // TODO: Add the `faqs` prop to the destructuring
}: FaqsListProps) {
  // TODO: Implement the basic FAQ rendering
  //  - Loop through the `faqs` array
  //  - For each FAQ, render simple "Question" and "Answer" labels with corresponding text
  return (
    <></>
  );
}
