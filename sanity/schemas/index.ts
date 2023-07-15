import { type SchemaTypeDefinition } from 'sanity';

import Product from './product';
import TitleBanner from './titleBanner';
import Divider from './divider';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, TitleBanner, Divider],
};
