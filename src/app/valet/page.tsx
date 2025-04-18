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
            <Breadcrumb top_title='Portfolio Details' title='Valet' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true} img={"https://api.hnhtechsolutions.com/images/1705501967070-27dbc9019a5ec44ddefd2c6782b3ca28-Valetservices.jpg"} />
            <DetailsPortfolio app={""} title={"Valet"} project_name={"Web Application"} website={"https://vallaycarparking.newhnh.ml/"} paragraph={"You can browse qualified valet parking companies by the states they service. Valet Parking Companies can provide parking management services for your business or event."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page