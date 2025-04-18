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
            <Breadcrumb top_title='Portfolio Details' title='Designer' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1705662360175-b286dc738bf13e6e54c4ed7c10f6baac-Designer.jpg"}
            />
            <DetailsPortfolio
                title={"Designer"}
                project_name={"Mobile Application"}
                website={""}
                app={"https://www.hnhtechsolutions.com/project/Designerr.php"}
                paragraph={"Designer will curate complete outlits that are hand-picked for you using apparel from today's leading brands."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page