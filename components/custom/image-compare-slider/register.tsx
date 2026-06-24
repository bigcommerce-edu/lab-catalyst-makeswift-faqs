'use client';

import { Image, Style } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { ImageCompareSlider } from './image-compare-slider';

runtime.registerComponent(
  ImageCompareSlider,
  {
    type: 'img-compare-slider',
    label: 'Image Compare Slider',
    props: {
      // TODO: Add the `className` control definition
      //  - This should use the `Style` control, which will display multiple controls in the editor
      //  - Use `properties` with constants from `Style` to limit the exposed controls to width, margin, padding, border, and border radius
      image1: Image({
        label: "Image 1",
        format: Image.Format.URL,
      }),
      image2: Image({
        label: "Image 2",
        format: Image.Format.URL,
      }),
    },
  }
);
