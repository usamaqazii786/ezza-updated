import React from 'react'
import Wrapper from '@/layout/Wrapper';  
import HeaderTwo from '@/layout/headers/HeaderTwo';
import FooterOne from '@/layout/footers/FooterOne';
import PrivicyPolicyContent from '../../components/common/PrivicyPolicyContent';
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';

export default function pages() {
  return (
    <>
    <Wrapper>
    <div >
<HeaderTwo/>
        <main>
            <Breadcrumb top_title='Privacy Policy' title='Privacy Policy'/>
<PrivicyPolicyContent/>
        </main>
        <FooterOne/>
    </div>
    </Wrapper>
    
 
    
    </>
  )
}
