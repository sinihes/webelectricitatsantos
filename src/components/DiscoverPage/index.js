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
    SubtitleModify,
    ImgWrap,
    Img,
} from '../InfoPage/InfoPageElements';


const DiscoverPage = ({lightText, lightBg, id, imgStart, darkText, img, alt}) => {
    const [t] = useTranslation("global")


    return (
        <>
        <Helmet>
            <title>Que tenemos que saber?</title>
        </Helmet>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("discover_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("discover_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("discover_page.description")}</Subtitle>
                              <SubtitleModify darkText={darkText}>{t("discover_page.propose")}</SubtitleModify> 
                                <Subtitle darkText={darkText}>{t("discover_page.description2")}</Subtitle>
                                <SubtitleModify darkText={darkText}>{t("discover_page.propose2")}</SubtitleModify> 
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

export default DiscoverPage;