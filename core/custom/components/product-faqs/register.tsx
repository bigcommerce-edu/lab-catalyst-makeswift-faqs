import { Checkbox, Image, List, Shape, Slot, TextInput } from '@makeswift/runtime/controls';
import { runtime } from '~/lib/makeswift/runtime';

import { MakeswiftProductFaqs } from './client';

export const COMPONENT_TYPE = 'catalyst-makeswift-product-faqs';

runtime.registerComponent(MakeswiftProductFaqs, {
  type: COMPONENT_TYPE,
  label: 'MakeswiftProductFaqs (private)',
  hidden: true,
  props: {
    faqs: List({
      label: 'FAQs',
      type: Shape({
        type: {
          question: TextInput({ label: 'Question', defaultValue: 'Question' }),
          answer: TextInput({ label: 'Answer', defaultValue: 'Answer' }),
          richContent: Checkbox({ label: 'Use rich content slot', defaultValue: false }),
          content: Slot(),
        },
      }),
      getItemLabel: (section) => section?.question || 'Question',
    }),
  },
});
