

import Checkout from '@/components/inner-shop/checkout';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Checkout - EZA-TECHnology",
};



const index = () => {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  );
};

export default index;