'use client';

import { clsx } from 'clsx';
import { forwardRef, Ref } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Props {
  // TODO: Add the props that will be received from Makeswift controls
  //  - `image1` and `image2` should both be strings containing the image URLs
}

export const ImageCompareSlider = forwardRef((
  { 
    // TODO: Add the new props to the destructuring
    //  - These can still use the placeholder URLs as default values
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
      {/* TODO: Update the `src` of each `ReactCompareSliderImage` to use the corresponding prop */}
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
