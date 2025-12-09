import { MakeswiftComponent } from '@makeswift/runtime/next';

import { getComponentSnapshot } from '~/lib/makeswift/client';

import { type ContextProps, ProductFaqsContextProvider } from './client';
import { COMPONENT_TYPE } from './register';

export async function ProductFaqs({ 

}: ContextProps) {
  return Promise.resolve(null);
}
