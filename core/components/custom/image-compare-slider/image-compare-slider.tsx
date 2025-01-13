'use client';

import { forwardRef, Ref } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Props {
  image1?: string;
  image2?: string;
}

export const ImageCompareSlider = forwardRef((
  { 
    image1 = "https://placehold.co/600x400", 
    image2 = "https://placehold.co/600x400",
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <div ref={ref}>
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
