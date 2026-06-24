import { Checkbox, Group, List, Slot, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { MakeswiftProductFaqs } from './client';

export const COMPONENT_TYPE = 'catalyst-makeswift-product-faqs';

// TODO: Register the component with the Makeswift runtime
//  - Use `COMPONENT_TYPE` as the type. This is exported because it's also used in the server component.
//  - Include the label "MakeswiftProductFaqs (private)"
//  - Set `hidden` to `true` for this one, because we're only embedding it in code, not making it available in the editor.
//  - `props` can be empty for now
