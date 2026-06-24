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
      {/* TODO: Replace the placeholder with the basic compare slider implementation 
            - Use the `ReactCompareSlider` and `ReactCompareSliderImage` components from `react-compare-slider`
            - For the initial implementation, use the placeholder image URL `https://placehold.co/600x400` for both images
      */}
      Image Compare Slider
    </div>
  );
});

export default ImageCompareSlider;
