'use client';

import { clsx } from 'clsx';
import { forwardRef, Ref } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Props {
  // TODO: Add the `className` prop
  //  - The Makeswift control will combine all configured styles into a single class name, so this is a simple string
  image1?: string;
  image2?: string;
}

export const ImageCompareSlider = forwardRef((
  { 
    // TODO: Add `className` to the destructuring
    image1 = "https://placehold.co/600x400", 
    image2 = "https://placehold.co/600x400",
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
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage 
            src={image1}
          />
        }
        itemTwo={
          <ReactCompareSliderImage 
            src={image2}
          />
        }
      />
    </div>
  );
});

export default ImageCompareSlider;
