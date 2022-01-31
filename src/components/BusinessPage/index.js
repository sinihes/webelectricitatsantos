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
} from '../InfoPage/InfoPageElements';


const BusinessPage = ({lightText, lightBg, id, imgStart, darkText, img, alt }) => {
    const [t] = useTranslation("global")


    return (
        <>
        <Helmet>
            <title>Electricidad industrial</title>
        </Helmet>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("business_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("business_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("business_page.description")}</Subtitle>
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

export default BusinessPage;
