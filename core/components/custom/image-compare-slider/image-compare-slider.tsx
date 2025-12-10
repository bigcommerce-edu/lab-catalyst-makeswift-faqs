'use client';

import { clsx } from 'clsx';
import { forwardRef, Ref } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Props {
  // TODO: Add the `className` prop
  //  - The Makeswift control will combine all configured styles into a single class name, so this is a simple string
  // TODO: Add the props that will be received from Makeswift controls
  //  - `image1` and `image2` should both be strings containing the image URLs
}

export const ImageCompareSlider = forwardRef((
  { 
    // TODO: Add `className` to the destructuring
    // TODO: Add the new props to the destructuring
    //  - These can still use the placeholder URLs as default values
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  return (
    // TODO: Add the `className` prop to the collection of class names aggregated with `clsx`
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
