
import TeamDetails from '@/components/inner-pages/team-details';
import Wrapper from '@/layout/Wrapper';  

export const metadata = {
  title: "Team Details - EZA-TECHnology",
};

const index = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  );
};

export default index;