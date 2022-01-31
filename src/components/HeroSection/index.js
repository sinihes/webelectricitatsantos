import React ,{useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button, HeroContainer,HeroBg, VideoBg, HeroContent, HeroH1,HeroH2,  HeroP, HeroBtnWrapper 
, ArrowForward, ArrowRight} from './HeroElement';
import {useTranslation} from 'react-i18next';
function HeroSection() {
    /* Hock Translate lenguage */
    const [t] = useTranslation("global")

    const [hover, setHover] = useState(false)

    const  onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                ELECTRICITAT I AUTOMATISMES SANTOS, S.A.
                </HeroH1>
                <HeroH2>
                {t("heroSection.title2")}
                </HeroH2>
                <HeroP>
                {t("heroSection.paragraf")}
                </HeroP>
                <HeroBtnWrapper>

                    <Button to="" href="tel:+34945337356" title="Telefono contacto"  onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        {t("heroSection.button")} {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;