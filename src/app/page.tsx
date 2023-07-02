import React from 'react';
import { client } from '../../sanity/lib/client';

type Props = {
  products: any;
};

const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

const Home: React.FC<Props> = async ({ products }) => {
  const productData = await getData();

  return (
    <main>
      Hello World!
      {productData.props.products?.map((product: any) => product.name)}
    </main>
  );
};

export default Home;
