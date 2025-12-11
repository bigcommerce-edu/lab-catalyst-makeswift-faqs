import { MakeswiftComponent } from '@makeswift/runtime/next';

import { getComponentSnapshot } from '~/lib/makeswift/client';

import { type ContextProps, ProductFaqsContextProvider } from './client';
import { COMPONENT_TYPE } from './register';

/**
 * This component is used in the page server component, where `ProductFaqs` was directly rendered previously.
 * The component doesn't define UI of its own. Its job is to accept the same props as `ProductFaqs`,
 * set those on a React context, and then "embed" the Makeswift-controlled component that will ultimately
 * render the content.
 */
export async function ProductFaqs({ 
  // TODO: Add the appropriate props to the destructuring
}: ContextProps) {
  // TODO: Await `getComponentSnapshot` with a product-unique snapshot ID
  //  - This will fetch the Makeswit "snapshot" containing the configuration values from the editor

  // TODO: Replace the empty return with the full implementation
  //  - Use `ProductFaqsContextProvider` to wrap the content and set the context values
  //  - Use `MakeswiftComponent` with the snapshot and the component type declared in `register` to embed the built-in element
  return Promise.resolve(null);
}
