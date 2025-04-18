
import Wrapper from '@/layout/Wrapper'; 
import About from '@/components/inner-pages/about';

export const metadata = {
  title: "About -  EZA-TECHnology",
};

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;