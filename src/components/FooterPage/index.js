import { useTranslation } from 'react-i18next';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    WebsiteRights,
    SocialIconLink,
    SocialLogo,

} from './FooterElement';




const Footer = () => {
    const [t] = useTranslation("global");

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    {t("footer.logo")}
                </SocialLogo>
                <SocialIconLink href='http://www.electricitatsantos.cat/EIAWEB/Politica_privacitat_plana_web.pdf' target='_blank'>
                    {t("footer.privacy")}
                </SocialIconLink>
                <WebsiteRights>Santos @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;

