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
            <Breadcrumb top_title='Portfolio Details' title='Amnaya' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1705652290039-adf016c5f3381ae838e60ad6eadd996e-Amnaya.jpg"}
            />
            <DetailsPortfolio
                title={"Amnaya"}
                project_name={"Mobile Application"}
                website={""}
                app={"https://www.hnhtechsolutions.com/project/Amnaya.php"}
                paragraph={"A web and app base open content online botanical encyclopedia created through the collaborative effort of a community of users known as contributor, reader and admin. Anyone registered on the site can create an article for publication"} />
            <FooterOne />
        </Wrapper>
    )
}

export default page