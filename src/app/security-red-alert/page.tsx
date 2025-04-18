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
            <Breadcrumb top_title='Portfolio Details' title='Security Red Alert' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1705650651420-a7612a660fc7f868891df0fc8e448d3c-SRA.jpg"}
            />
            <DetailsPortfolio
                title={"Security Red Alert"}
                project_name={"Mobile Application"}
                website={"https://hnhsofttechsolutions.com/"}
                app={"https://www.hnhtechsolutions.com/project/sra.php"}
                paragraph={"Security Red Alert is Alarm Control Systems, Entry access and door control systems, Intruder alarms, fire alarms, Fire and Man Guarding."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page