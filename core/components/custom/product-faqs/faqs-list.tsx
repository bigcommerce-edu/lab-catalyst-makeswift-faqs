import { ReactNode } from 'react';

import { Accordion, AccordionItem } from '@/vibes/soul/primitives/accordion';

export interface Faq {
  key: string;
  question: string;
  answer: string | ReactNode;
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
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        style={{
          '--accordion-light-title-text-hover': 'hsl(var(--info))'
        } as React.CSSProperties}
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
