import React from 'react'
import Wrapper from '@/layout/Wrapper';  
import HeaderTwo from '@/layout/headers/HeaderTwo';
import FooterOne from '@/layout/footers/FooterOne';
import TermsAndCondition from '../../components/common/TermsAndCondition';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';

export default function page() {
  return (
    <>
    <Wrapper>
        <div>
          <HeaderTwo/>
      <main>
        <Breadcrumb top_title='Terms & Condition' title='Terms & Condition'/>
<TermsAndCondition/>
      </main>
      <FooterOne />

        </div>
    </Wrapper>
    
    
    
    </>
  )
}
