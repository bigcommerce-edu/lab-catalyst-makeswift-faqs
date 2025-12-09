import { ReactNode } from 'react';

import { Accordion, AccordionItem } from '@/vibes/soul/primitives/accordion';

export interface Faq {
  key: string;
  question: string;
  // TODO: Update the type of `answer` to allow a `ReactNode` as well as a string
  //  - This accounts for answers that were provided by Makeswift as a content slot
  answer: string;
}

interface FaqsListProps {
  faqs: Faq[];
}

export function FaqsList({
  faqs,
}: FaqsListProps) {
  return faqs.length <= 0 ? '' : (
    <div className="mx-auto md:w-2/3">
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
  );
}
