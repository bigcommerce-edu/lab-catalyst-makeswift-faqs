'use client';

import { clsx } from 'clsx';
import { forwardRef, ReactNode, Ref, useState } from 'react';

// TODO: Add a `Member` interface to define what each item in the list will contain
//  - `name`, `position` and `image` should be optional strings

interface Props {
  // TODO: Add the `members` prop, which should be an array of `Member` objects
}

export const TeamMembers = forwardRef((
  { 
    // TODO: Add the `members` prop to the destructuring
  }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div
      className={clsx(
        "w-full",
      )}
      ref={ref}
    >
      {/* TODO: Replace the placeholder with a simple implementation that displays a count for now 
            - If there are members, display the count of members
            - If there are no members, display the message "Add a Team Member"
      */}
      Team Members
    </div>
  )
});

export default TeamMembers;
