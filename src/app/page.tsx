
import React from 'react';
import Wrapper from '../layout/Wrapper';
import HomeOne from '@/components/homes/one-page/home-3-one-page';
// import { ApolloProvider, useQuery } from '@apollo/client';
// import client from '../apollo-client';
// import GETDATA from '@/queries/getPosts';
export const metadata = {
  title: 'EZA-TECHnology',
};
const MainHome: React.FC = () => {

  return (
    <Wrapper>
        <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
