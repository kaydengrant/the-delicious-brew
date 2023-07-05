import { type SchemaTypeDefinition } from 'sanity';

import Product from './product';
import TitleBanner from './titleBanner';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, TitleBanner],
};
