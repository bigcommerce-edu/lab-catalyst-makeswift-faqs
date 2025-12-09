import { ReactNode } from 'react';

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
      {faqs.map(faq => (
        <div className="my-4" key={faq.key}>
          <div>
            <label className="font-bold">Question:</label>
            <span> {faq.question}</span>
          </div>
          <div>
            <label className="font-bold">Answer:</label>
            <span> {faq.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
