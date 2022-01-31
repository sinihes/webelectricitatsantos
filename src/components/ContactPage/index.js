import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkedAlt , FaPhoneSquareAlt} from 'react-icons/fa';
import { SiGooglestreetview } from 'react-icons/si'
import {Helmet} from 'react-helmet';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,

    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    IconContainer,
    ButtonMap,
    Button
} from './SigninElement';

const ContactComponent = ({ lightText, lightBg, id, darkText, primary, dark}) => {
    const [t] = useTranslation("global")


    return (
        <>
        <Helmet>
            <title>Contactar con Santos</title>
        </Helmet>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                            <TextWrapper>
                                <TopLine>{t("contact.topLine")}</TopLine>
                                <Heading lightText={lightText}>{t("contact.headline")}</Heading>
                                <IconContainer>
                                    <FaMapMarkedAlt />
                                    <Subtitle darkText={darkText}>{t("contact.description")}</Subtitle>
                                </IconContainer>
                                <IconContainer>
                                    <FaPhoneSquareAlt />
                                    <Button to="" href="tel:+34945337356" title="Telefono contacto" primary={primary} dark={dark}>
                                {t("contact.buttonTelefon")}</Button> 
                                     <Subtitle darkText={darkText}>{t("contact.description2")}</Subtitle>
                                </IconContainer>
                                <IconContainer>
                                    <FaPhoneSquareAlt />
                                    <Button to="" href="mailto:info@electricitatsantos.cat" title="mail de contacto" primary={primary} dark={dark}>
                                {t("contact.buttonMail")}</Button> 
                                     <Subtitle darkText={darkText}>info@electricitatsantos.cat</Subtitle>
                                </IconContainer>
                                <IconContainer>
                                    <SiGooglestreetview />
                                    <ButtonMap href="https://goo.gl/maps/2W6zFmnu6rhq7NcL7">{t("contact.textMap")}</ButtonMap>
                                </IconContainer>
                            </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>);
};

export default ContactComponent;