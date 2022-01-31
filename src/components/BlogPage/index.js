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


const BlogPage = ({lightText, lightBg, id, imgStart, darkText, img, alt }) => {
    const [t] = useTranslation("global")


    return (
        <>
                <Helmet>
            <title>Blog Santos</title>
        </Helmet>
          <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t("blog_page.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("blog_page.headline")}</Heading>
                                <Subtitle darkText={darkText}>{t("blog_page.description")}</Subtitle>
                                <Subtitle darkText={darkText}>{t("blog_page.description2")}</Subtitle>
                                <Subtitle darkText={darkText}>{t("blog_page.description3")}</Subtitle>
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

export default BlogPage;