'use client';

import { Image, Style } from '@makeswift/runtime/controls';
import { runtime } from '~/lib/makeswift/runtime';
import ImageCompareSlider from './image-compare-slider';

runtime.registerComponent(
  ImageCompareSlider,
  {
    type: 'img-compare-slider',
    label: 'Image Compare Slider',
    props: {

    },
  }
);
