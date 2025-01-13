'use client';

import { CSSProperties, forwardRef, ReactNode, Ref, useState } from 'react';
import { clsx } from 'clsx';

interface Member {
  name?: string;
  position?: string;
  image?: string;
}

interface Props {
  members: Member[];
}

export const TeamMembers = forwardRef((
  { 
    members,
  }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div
      className={clsx(
        "w-full"
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
