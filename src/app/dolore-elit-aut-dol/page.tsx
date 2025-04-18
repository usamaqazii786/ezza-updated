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
            <Breadcrumb top_title='Portfolio Details' title='Dolore elit aut dol' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1724766979941-4a0f8d784d9f54f5e2498707c510b49a-apple-laptop-hd-8k-wallpaper-stock-photographic-image_915071-64065.jpg"}
            />
            <DetailsPortfolio
                title={"Dolore elit aut dol"}
                project_name={"AI"}
                website={""}
                app={""}
                paragraph={"Accusamus molestiae"} />
            <FooterOne />
        </Wrapper>
    )
}

export default page