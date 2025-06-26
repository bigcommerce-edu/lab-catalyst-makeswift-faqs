'use client';

import { clsx } from 'clsx';
import { forwardRef, ReactNode, Ref, useState } from 'react';

interface Props {

}

export const TeamMembers = forwardRef((
  { 

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
      Team Members
    </div>
  )
});

export default TeamMembers;
