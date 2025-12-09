'use client';

import { clsx } from 'clsx';
import { forwardRef, Ref } from 'react';

interface Props {

}

export const ImageCompareSlider = forwardRef((
  { 

  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div 
      className={clsx(
        "overflow-hidden",
      )} 
      ref={ref}
    >
      Image Compare Slider
    </div>
  );
});

export default ImageCompareSlider;
