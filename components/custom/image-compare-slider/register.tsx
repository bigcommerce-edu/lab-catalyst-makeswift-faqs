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
      // TODO: Add the controls definition for the `image1` and `image2` props
      //  - Both should use the `Image` control
      //  - `format` should be `Image.Format.URL`, meaning the value passed to the component will be a simple URL string
    },
  }
);
