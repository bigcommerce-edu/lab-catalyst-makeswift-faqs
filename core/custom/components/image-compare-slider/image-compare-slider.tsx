'use client';

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
    <div ref={ref}>
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
