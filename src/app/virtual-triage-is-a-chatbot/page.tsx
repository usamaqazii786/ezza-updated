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
            <Breadcrumb top_title='Portfolio Details' title='Virtual Triage is a chatbot' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1726148569532-4f5f91c768e8e99de6f9a4f3aff463ea-download.png"}
            />
            <DetailsPortfolio
                title={"Virtual Triage is a chatbot"}
                project_name={"AI"}
                website={""}
                app={""}
                paragraph={"Virtual Triage is a chatbot designed to provide users with the best suitable doctors based on their symptoms. It recommends multiple doctors within the user's country, including their name, clinic name, email, fees, rating, and specialty."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page