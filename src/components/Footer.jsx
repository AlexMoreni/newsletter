import { FooterContainer, TitleFooter, Copy } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <TitleFooter>Newsletter</TitleFooter>
      <Copy>
        &copy; {new Date().getFullYear()} Newsletter, All rights reserved
      </Copy>
    </FooterContainer>
  );
};

export default Footer;
