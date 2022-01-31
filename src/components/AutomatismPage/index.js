import React from 'react';
import {useTranslation} from 'react-i18next';
import {Helmet} from 'react-helmet';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
} from '../PageElement';

import {NavBtnLink } from '../Navbar/NavbarElement'

const AutomatismPage = ({lightText, lightBg, id, imgStart, darkText, img, alt }) => {
    const [t] = useTranslation("global")


    return (
        <>
        <Helmet>
            <title>Automatismos industriales</title>
        </Helmet>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("automatism_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("automatism_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("automatism_page.description")}</Subtitle>
                                <Subtitle darkText={darkText}>{t("automatism_page.description2")}</Subtitle>
                                <NavBtnLink to='/contact' $spy={true} $smooth={true} duration={500} exact="true" offset={-80}>{t("siderbar.contact")}</NavBtnLink>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>);
};

export default AutomatismPage;