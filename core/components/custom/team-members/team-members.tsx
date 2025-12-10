'use client';

import { clsx } from 'clsx';
import { forwardRef, ReactNode, Ref, useState } from 'react';

interface Member {
  name?: string;
  position?: string;
  image?: string;
}

interface Props {
  // TODO: Add `className` prop
  //  - The Makeswift control will combine all configured styles into a single class name, so this is a simple string
  members: Member[];
  // TODO: Add new props to the interface
  //  - `highlightColor` and `thumbnailTextColor` should be optional strings
  //  - `thumbnailOrientation` should be an optional string of the specific value 'vertical' or 'horizontal'
  //  - `itemsPerRow` should be an optional number
}

export const TeamMembers = forwardRef((
  { 
    // TODO: Add `className` prop to the destructuring
    members,
    // TODO: Add `highlightColor`, `thumbnailTextColor`, `thumbnailOrientation`, and `itemsPerRow` to the destructuring
  }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  // TODO: Add constants for `vertical` and `fadeInDuration`
  //  - `vertical` is hard-coded as `true` for now but will be based on a prop later
  //  - `fadeInDuration` should be 500, applying a half-second fade-in animation when the selected team member changes

  // TODO: Add state values for `activeMember` and `visibleMembers`
  //  - `activeMember` tracks the index of only one memeber at a time - the one currently selected
  //  - `visibleMembers` tracks the indices of all members that are currently visible, which will include multiple members during the fade-in/fade-out

  // TODO: Add the `changeActiveMember` function
  //  - Determine the index of the current active member
  //  - Update `visibleMembers` to add the member that was just activated 
  //  - Set a short timeout to set `activeMember` to the new index and then remove the previously active member from `visibleMembers`
  //    - Use 1.5x the `fadeInDuration` as a safe timeout value

  return (
    // TODO: Add the `className` prop to the collection of class names aggregated with `clsx`
    // TODO: Add flex style class, conditional on whether `vertical` is the current orientation
    <div
      className={clsx(
        "w-full",
      )}
      ref={ref}
    >
      {(members.length > 0) ?

      <div className="w-full"><h3 className="text-lg text-center">Number of Team Members: {members.length}</h3></div>

      : 

      <div className="w-full"><h3 className="text-lg text-center">Add a Team Member</h3></div>

      }
    </div>
  )
});

export default TeamMembers;
