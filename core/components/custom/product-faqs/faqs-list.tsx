import { ReactNode } from 'react';

import { Accordion, AccordionItem } from '@/vibes/soul/primitives/accordion';

export interface Faq {
  key: string;
  question: string;
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
      {/* TODO: Add a `style` prop to override the hover text color of `Accordion`
            - The `--accordion-light-title-text-hover` CSS variables is exposed by the component for this
            - Use the generic `--info` CSS variable as the value for this var (passing to the `hsl` function)
      */}
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
