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
import {NavBtnLink } from '../Navbar/NavbarElement';



const DomesticPage = ({lightText, lightBg, id, imgStart, darkText, img, alt }) => {
    const [t] = useTranslation("global")


    return (
        <>
        <Helmet>
            <title>Instalaciones domesticas</title>
        </Helmet>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("domestic_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("domestic_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("domestic_page.description")}</Subtitle>
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

export default DomesticPage;