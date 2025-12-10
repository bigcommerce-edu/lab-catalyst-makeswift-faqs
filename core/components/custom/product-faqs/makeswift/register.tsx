import { Checkbox, Group, List, Slot, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { MakeswiftProductFaqs } from './client';

export const COMPONENT_TYPE = 'catalyst-makeswift-product-faqs';

runtime.registerComponent(MakeswiftProductFaqs, {
  type: COMPONENT_TYPE,
  label: 'MakeswiftProductFaqs (private)',
  hidden: true,
  props: {
    
  },
});
