import type { ReactNode } from 'react';

import type { FaqsCollection } from '../_data/component-data';
import type { Faq } from '../faqs-list';

/**
 * The shape of a single FAQ authored through the Makeswift editor controls.
 * `content` holds the rich-content Slot used when no text `answer` is provided.
 */
interface AuthoredFaq {
  question: string;
  answer: string;
  content: ReactNode;
}

/**
 * Format Makeswift-authored FAQs into the shared `Faq` shape. Keys are the
 * array index, and an empty (or whitespace-only) answer falls back to the rich
 * content Slot.
 *
 * @param {AuthoredFaq[]} faqs - The FAQs authored in the Makeswift editor.
 * @returns {Faq[]} The formatted FAQs ready to render in the accordion.
 */
const formatAuthoredFaqs = (faqs: AuthoredFaq[]): Faq[] =>
  faqs.map((faq, index) => ({
    key: index.toString(),
    question: faq.question,
    // Fall back to the rich content Slot when no text answer is provided.
    answer: faq.answer.trim() === '' ? faq.content : faq.answer,
  }));

/**
 * Combine the authored FAQs with the original database-backed collection.
 * Authored FAQs come first; the original FAQs (and their next cursor) are only
 * included when `showOriginal` is enabled.
 *
 * @param {Faq[]} authored - The formatted Makeswift-authored FAQs.
 * @param {FaqsCollection} original - The database-backed FAQ collection.
 * @param {boolean} showOriginal - Whether to append the original FAQs.
 * @returns {FaqsCollection} The merged collection passed to `ProductFaqs`.
 */
const combineFaqsCollections = (
  authored: Faq[],
  original: FaqsCollection,
  showOriginal: boolean
): FaqsCollection => ({
  endCursor: showOriginal ? original.endCursor : null,
  faqs: authored.concat(showOriginal ? original.faqs : []),
});

export { type AuthoredFaq, combineFaqsCollections, formatAuthoredFaqs };
