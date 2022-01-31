import React from 'react';
import {useTranslation} from 'react-i18next';

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
    SubtitleModify
} from '../InfoPage/InfoPageElements';

import {NavBtnLink } from '../Navbar/NavbarElement'


const IndustriePage = ({lightText, lightBg, id, imgStart, darkText, img, alt }) => {
    const [t] = useTranslation("global")


    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("industrie_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("industrie_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("industrie_page.description")}</Subtitle>
                                <Subtitle darkText={darkText}>{t("industrie_page.description2")}</Subtitle>
                                <SubtitleModify darkText={darkText}>{t("industrie_page.description3")}</SubtitleModify>
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

export default IndustriePage;