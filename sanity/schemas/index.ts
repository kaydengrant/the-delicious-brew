import { type SchemaTypeDefinition } from 'sanity';

import Product from './product';
import Banner from './banner';
import Divider from './divider';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, Banner, Divider],
};
