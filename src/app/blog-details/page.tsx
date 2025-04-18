
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import BlogDetails from '@/components/blogs/blog-details';

export const metadata = {
  title: "Blog Details - EZA-TECHnology",
};

const index = () => {
  return (
    <Wrapper>
      <BlogDetails />      
    </Wrapper>
  );
};

export default index;