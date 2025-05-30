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
            <Breadcrumb top_title='Portfolio Details' title='Stocks And Cryptocurrency Bot Analyzer' />
            {/* <ProjectArea/> */}

            <Trust onPageStyle={true}
                img={"https://api.hnhtechsolutions.com/images/1726148444856-3666c95a9f77e57425eeb20e0d918b84-downloadj.peg"}
            />
            <DetailsPortfolio
                title={"Stocks And Cryptocurrency Bot Analyzer"}
                project_name={"AI"}
                website={""}
                app={""}
                paragraph={"Cryptocurrency Bot Analyzer: This tool allows users to simply enter the name of a cryptocurrency, and the analyzer generates a comprehensive report consisting of the following components: 1. Market Analysis: This section determines the intrinsic value of the selected coin, providing insights into its overall market position. 2. Technical Analysis: The analyzer accesses a cryptocurrency stock platform to capture a screenshot of the 1-month candlestick chart. It then evaluates this chart to deliver detailed insights, including: - Trend Strength - Support and Resistance Levels - Candlestick Patterns - Moving Averages - Volume Analysis - Risk Assessment - Summary and Recommendations 3. Sentiment Analysis: This feature extracts and analyzes the latest news and top stories related to the coin, assessing whether the market sentiment is positive, neutral, or negative based on the gathered information. 4. Final Report: After completing the analyses, the tool generates a comprehensive report summarizing all findings. Users can easily download this report as a PDF with a simple click of a button."} />
            <FooterOne />
        </Wrapper>
    )
}

export default page