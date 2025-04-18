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
      <Breadcrumb top_title='Portfolio Details' title='Find Me Storage' />
      {/* <ProjectArea/> */}

      <Trust onPageStyle={true} img={"https://api.hnhtechsolutions.com/images/1705501258482-3d9b952b89ed9b6863242436c4184ffe-Findmestorage.jpg"} />
      <DetailsPortfolio app={""} title={"Find Me Storage"} project_name={"Web Application"} website={""} paragraph={"Find the right storage at the right price, for those who don't need 24/7 access to their storage unit, our on-demand storage opton is the way to go! With on-demand storage, we offer FREE pick-up from your residence or business. Just login find the storage near you to reserve your space and schedule a pick-up me that works for you."} />
      <FooterOne />
    </Wrapper>
  )
}

export default page