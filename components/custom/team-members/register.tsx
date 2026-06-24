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
      // TODO: Add definition for `className` prop
      //  - This should use the `Style` control, which will display multiple controls in the editor
      //  - Use `properties` with the `Style.All` constant to allow all possible style controls
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
            content: Slot(),
          },
        }),
        getItemLabel(member) {
          return member?.name || 'Team Member'
        },
      }),
      highlightColor: Color({
        label: "Highlight Color",
      }),
      thumbnailTextColor: Color({
        label: "Thumbnail Text Color",
      }),
      thumbnailOrientation: Select({
        label: "Thumbnail Orientation",
        labelOrientation: "horizontal",
        options: [
          { value: "vertical", label: "Vertical" },
          { value: "horizontal", label: "Horizontal" },
        ],
        defaultValue: "vertical",
      }),
      itemsPerRow: Number({
        label: "Horizontal Items Per Row",
        defaultValue: 3,
        min: 1,
        max: 12,
      }),
    },
  }
);
