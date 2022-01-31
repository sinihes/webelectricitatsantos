import React from 'react';
import {ButtonPage} from '../ButtonElement';

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
 from './InfoElement'



const InfoSection = ({to,lightText,lightBg, id, imgStart, darkText, img, alt, primary, dark, dark2 }) => {
    return ( 
  <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine></TopLine>
                    <Heading lightText={lightText}></Heading>
                    <Subtitle darkText={darkText}></Subtitle>
                    <BtnWrap>
                        <ButtonPage             
                        to={to}
                        primary={primary ? 1 : 0}
                        $dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        ></ButtonPage>
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

export default InfoSection;
