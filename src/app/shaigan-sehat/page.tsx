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
            <Breadcrumb top_title='Portfolio Details' title='Shaigan Sehat' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1705650833847-adf016c5f3381ae838e60ad6eadd996e-Amnaya.jpg"}
            />
            <DetailsPortfolio
                title={"Shaigan Sehat"}
                project_name={"Mobile Application"}
                website={""}
                app={"https://www.hnhtechsolutions.com/project/shaigan.shehet.php"}
                paragraph={"Shaigan Sehat app which will help you to transform your Clinic into a next generation digital health care center, Shaigan Sehat, a unique database admin panel and mobile app to fully manage your OPD."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page