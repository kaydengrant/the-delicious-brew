import { createClient } from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'v9y56en8',
  dataset: 'production',
  apiVersion: '2023-07-01',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};
