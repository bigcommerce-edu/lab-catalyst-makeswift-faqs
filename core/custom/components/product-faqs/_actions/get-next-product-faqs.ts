'use server';

import { client } from '~/client';

import { formatFaqsCollection, MetafieldsQuery } from '../_data/component-data';

const getNextProductFaqs = async (
  productId: number,
  limit: number,
  endCursor?: string | null
) => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(2000);
  
  return Promise.resolve({
    endCursor: null,
    faqs: [
      {
        key: 'q3',
        question: 'Question 3',
        answer: 'Answer 3',
      },
      {
        key: 'q4',
        question: 'Question 4',
        answer: 'Answer 4',
      }
    ]
  });
};

export default getNextProductFaqs;
