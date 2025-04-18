"use client"
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'
import DetailsPortfolio from '@/components/portfolio-section/DetailsPortfolio'
import Trust from '@/components/portfolio-section/Trust'
import FooterOne from '@/layout/footers/FooterOne'
import HeaderTwo from '@/layout/headers/HeaderTwo'
import Wrapper from '@/layout/Wrapper'

const page = () => {
    return (
        <Wrapper>
            <HeaderTwo />
            <Breadcrumb top_title='Portfolio Details' title='Canada Enterprizes' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1705502131753-6cb2a1f229890c81ca3b9733246e4c04-Canada.jpg"}
            />
            <DetailsPortfolio
                title={"Canada Enterprizes"}
                project_name={"Web Application"}
                app={""}
                website={"https://canadaenterprizes.sasstechnologies.com/"}
                paragraph={"Enterprisecanada.org is widely facilitates by administering through online portal containing over 2000 government, public, and private funding sources for grants, loans, donations, and investments. Portal contains supporting tools and resources to streamline entrepreneurs developments. Business plan builder is user-friendly and takes our members step-by-step to completion."}
            />
            <FooterOne />
        </Wrapper>
    )
}

export default page