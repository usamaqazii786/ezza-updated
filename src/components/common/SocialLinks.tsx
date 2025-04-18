import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/hnhtechsolutions/",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Ftech_hnh",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://pk.linkedin.com/company/hnh-tech-solutions",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/explore/locations/105650621149211/hnh-soft-tech-solutions/",
    target: "_blank",
    icon: "fab fa-vimeo-v",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}

const social_links_2: social_links_type_2[] = [
  {
    link: "https://www.facebook.com/hnhtechsolutions",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
  },
  // {
  //   link: "http://twitter.com",
  //   color: "",
  //   icon: "fa-brands fa-twitter",
  // },
  {
    link: "https://www.linkedin.com/company/hnh-tech-solutions",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/hnhsofttechsolutions/",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface DataType {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com/hnhtechsolutions",
    icon: "fa-brands fa-facebook-f",
  },
  {
    id: 2,
    link: "https://www.instagram.com/hnhsofttechsolutions/",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/hnh-tech-solutions",
    icon: "fa-brands fa-linkedin-in",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link style={{ color: "gray" }}
          key={t_index}
          href={t_item.link}
          target="_blank">
          <i className={t_item.icon}></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>  
    <span>Copyright © {new Date().getFullYear()} 
      <Link target="_blank" href="#"> {' '}EZA-TECHnology{' '}</Link>
      by All Rights Reserved </span>
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


