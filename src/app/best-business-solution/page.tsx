import ServicesDetails from '@/components/services-details';
import Wrapper from '@/layout/Wrapper';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "Services Details Tecz - IT Solutions & Technology React Next js Template",
};

// const params = useSearchParams();
// // const { id } = params; // Extract the id parameter
// const id = params.get("id")

// const service = servicedata.find((item) => item.id == Number(id));

const index = () => {
  return (
    <Wrapper>
      <ServicesDetails />
    </Wrapper>
  );
};

export default index;