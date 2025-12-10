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
      members: List({
        label: 'Members',
        type: Group({
          label: 'Member Details',
          props: {
            name: TextInput({
              label: 'Name',
            }),
            position: TextInput({
              label: 'Position',
            }),
            image: Image({
              label: 'Image',
              format: Image.Format.URL,
            }),
          },
        }),
        getItemLabel(member) {
          return member?.name || 'Team Member'
        },
      }),
      // TODO: Add other main prop controls
      //  - `highlightColor` will control the border color of the active team member thumbnail and should use the `Color` control
      //  - `thumbnailTextColor` will control the text color in each thumbnail and should use the `Color` control
      //  - `thumbnailOrientation` will control several style classes to switch between a vertical or horizontal orientation
      //      - This should use the `Select` control with options for 'vertical' and 'horizontal'
      //  - `itemsPerRow` will control how many team members are displayed per row in horizontal orientation and should use the `Number` control
    },
  }
);
