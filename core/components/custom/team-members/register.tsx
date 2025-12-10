'use client';

import { 
  Color, 
  Group,
  Image, 
  List, 
  Number, 
  Select,
  Slot, 
  Style, 
  TextInput 
} from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { TeamMembers } from './team-members';

runtime.registerComponent(
  TeamMembers,
  {
    type: 'team-members',
    label: 'Team Members',
    props: {
      // TODO: Add control definition for `members`
      //  - This should be presented in the Makeswift editor as a list, with each entry in the list having
      //    separate fields for name, position, and image
      //  - Use the `List` control in combination with the `Group` control to define each item's type
      //  - For each `Group`, the `TextInput` control is appropriate for `name` and `position`
      //  - For each `Group`, the `Image` control is appropriate for `image` (with `Image.Format.URL` format to pass a simple URL string to the component)
      //  - The `List` control will also need `getItemLabel` to define how each item is labeled in the editor
    },
  }
);
