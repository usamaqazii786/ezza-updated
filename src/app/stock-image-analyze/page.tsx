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
            <Breadcrumb top_title='Portfolio Details' title='Stock image analyze' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1726149015625-d81917d2fc0a2fe482a7d82a977a0743-download1j.peg"}
            />
            <DetailsPortfolio
                title={"Stock image analyze"}
                project_name={"AI"}
                website={""}
                app={""}
                paragraph={"This is a Stock image analyzer. The user have to input the candlestick chart of any stock or cryptocoin and then in the input area, the user have to define for what time interval the charts are in the image. After that the output will be a detailed analysis of that chart including answers like Trend Analysis, Support and Resistance Levels, Volume Analysis, Technical Indicators, Chart Patterns, Timeframes and Risk Management."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page