
import BlogSidebar from '@/components/blogs/blog-sidebar';
import Wrapper from '@/layout/Wrapper';
import React from 'react';


export const metadata = {
  title: "Blog Sidebar - EZA-TECHnology",
};


const index = () => {
  return (
    <Wrapper>
      <BlogSidebar />
    </Wrapper>
  );
};

export default index;