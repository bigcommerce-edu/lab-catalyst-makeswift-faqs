'use client';

import { clsx } from 'clsx';
import { forwardRef, Ref } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

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
        "overflow-hidden"
      )} 
      ref={ref}
    >
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage 
            src="https://placehold.co/600x400"
          />
        }
        itemTwo={
          <ReactCompareSliderImage 
            src="https://placehold.co/600x400"
          />
        }
      />
    </div>
  );
});

export default ImageCompareSlider;
