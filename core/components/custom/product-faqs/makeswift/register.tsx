import { Checkbox, Group, List, Slot, TextInput } from '@makeswift/runtime/controls';

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
      type: Group({
        label: 'FAQ Details',
        props: {
          question: TextInput({ label: 'Question', defaultValue: 'Question' }),
          answer: TextInput({ label: 'Answer', defaultValue: 'Answer' }),
          // TODO: Add definitions for the `richContent` and `content` props
          //  - `richContent` should be a boolean, controlling whether to show a dynamic slot or an answer string
          //  - `content` should be a `Slot` control, allowing editors to create free-form content
        },
      }),
      getItemLabel: (section) => section?.question || 'Question',
    }),
  },
});
