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
      <Breadcrumb top_title='Portfolio Details' title='Ontario Homes' />
      {/* <ProjectArea/> */}

      <Trust onPageStyle={true} img={"https://api.hnhtechsolutions.com/images/1705501704511-18b1ccc825dfe9b5ffe712b9b18f4f60-newontario.jpg"} />
      <DetailsPortfolio app={""} title={"Ontario Homes"} project_name={"Web Application"} website={"https://ontariohomes.sasstechnologies.com/"} paragraph={"Ontariohomes knows that a home must reflect your personal taste, lifestyle, and budget. Our Real estate website is deeply knowledgeable about the region and the buying and selling processes because our passion is finding the right home for each family that walks through website."} />
      <FooterOne />
    </Wrapper>
  )
}

export default page