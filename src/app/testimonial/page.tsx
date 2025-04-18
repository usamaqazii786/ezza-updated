import Testimonial from '@/components/inner-pages/testimonial';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Testimonial - EZA-TECHnology",
};


const index = () => {
  return (
    <Wrapper>
      <Testimonial />
    </Wrapper>
  );
};

export default index;