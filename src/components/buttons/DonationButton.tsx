import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const DonationButton: React.FC<Props> = ({ children }) => {
  return (
    <>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="RWBYTU6PBZ9FN" />
        <input type="hidden" name="amount" value="5" />
        <input type="hidden" name="no_recurring" value="1" />
        <input type="hidden" name="currency_code" value="USD" />
        {children ? (
          <>{children}</>
        ) : (
          <input
            className="clickable"
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        )}
      </form>
    </>
  );
};

export default DonationButton;
