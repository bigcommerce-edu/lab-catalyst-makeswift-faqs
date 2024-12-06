'use client';

import { CSSProperties, forwardRef, ReactNode, Ref, useState } from 'react';
import { clsx } from 'clsx';

interface Props {

}

export const TeamMembers = forwardRef((
  { 

  }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
    >
      Team Members
    </div>
  )
});

export default TeamMembers;
