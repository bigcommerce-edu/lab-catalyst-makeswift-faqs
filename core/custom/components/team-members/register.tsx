'use client';

import { 
  Color, 
  Image, 
  List, 
  Number, 
  Select, 
  Shape, 
  Slot, 
  Style, 
  TextInput 
} from '@makeswift/runtime/controls';
import { runtime } from '~/lib/makeswift/runtime';
import TeamMembers from './team-members';

runtime.registerComponent(
  TeamMembers,
  {
    type: 'team-members',
    label: 'Team Members',
    props: {
      members: List({
        label: 'Members',
        type: Shape({
          type: {
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
    },
  }
);
