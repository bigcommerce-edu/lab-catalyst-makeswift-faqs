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

    },
  }
);
