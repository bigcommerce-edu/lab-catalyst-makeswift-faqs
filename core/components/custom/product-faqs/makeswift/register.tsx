import { Checkbox, Group, List, Slot, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { MakeswiftProductFaqs } from './client';

export const COMPONENT_TYPE = 'catalyst-makeswift-product-faqs';

runtime.registerComponent(MakeswiftProductFaqs, {
  type: COMPONENT_TYPE,
  label: 'MakeswiftProductFaqs (private)',
  hidden: true,
  props: {
    // TODO: Add the control definition for the `faqs` prop
    //  - Combine a `List` control with a `Group` control, to allow editors to create an arbitrary list of question/answer items
    //  - Use the `TextInput` control for the `question` and `answer` of each item
    //  - Define `getItemLabel` to use the `question` property as the label for each item
  },
});
