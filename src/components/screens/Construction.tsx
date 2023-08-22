import React from 'react';

import { Cone } from '../../utils';

const Construction: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 text-center">
      <Cone size={150} />
      <h4>This page is currently under construction.</h4>
      <p>
        Sorry, this is still in development but it is expected to be finished
        soon. Thank you for understanding.
      </p>
    </section>
  );
};

export default Construction;
