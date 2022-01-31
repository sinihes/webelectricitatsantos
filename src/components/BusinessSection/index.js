import React from 'react';
import {ButtonPage} from '../ButtonElement';
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
    BtnWrap,
    ImgWrap,
    Img,
}
 from '../InfoSection/InfoElement';



const BussinessSection = ({to,lightText,lightBg, id, imgStart, darkText, img, alt, primary, dark, dark2 }) => {

/* Hock traslate language */
const [t] = useTranslation("global")

    return ( 
  <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{t("business_section.topLine")}</TopLine>
                    <Heading lightText={lightText}>{t("business_section.headline")}</Heading>
                    <Subtitle darkText={darkText}>{t("business_section.description")}</Subtitle>
                    <BtnWrap>
                        <ButtonPage             
                        to={to}
                        primary={primary ? 1 : 0}
                        $dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >{t("business_section.buttonLabel")}</ButtonPage>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

  </>)
};

export default BussinessSection;