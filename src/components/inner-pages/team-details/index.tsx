
"use client"
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import React from 'react';
import TeamDetailsArea from './TeamDetailsArea';
import TeamDetailsContactArea from './TeamDetailsContactArea';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import FooterOne from '@/layout/footers/FooterOne';

const TeamDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Team Details' title='Team Details' />
        <TeamDetailsArea />
        <TeamDetailsContactArea />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamDetails;