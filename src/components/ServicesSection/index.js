import React from 'react';
import Icon1 from '../../images/industrie.svg'
import Icon2 from '../../images/domestic.svg'
import Icon3 from '../../images/automatism.svg'
import {
    ServicesContainer,
    ServicesH2Title,
    ServicesWrapper,
    ServicesIcon,
    //ServicesH2,
    ServicesP,
    ServicesCard

} from './ServicesElement'

import { ButtonPage } from '../ButtonElement';
import {useTranslation} from 'react-i18next';

function Services({ primary, dark2, dark }) {
    /* hock traslate lenguage */
    const [t] = useTranslation("global");

    return (
        <ServicesContainer id='services'>
            <ServicesH2Title>{t("service_section.service_title")}</ServicesH2Title>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ButtonPage
                        to="/industrie"
                        $primary={primary ? 1 : 0}
                        $dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                    >{t("service_section.btn_industries")}</ButtonPage>
                    <ServicesP>{t("service_section.p_industries")}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ButtonPage
                        to="/domestic"
                        $primary={false}
                        $dark={false}
                    >{t("service_section.btn_domestic")}</ButtonPage>
                    <ServicesP>{t("service_section.p_domestic")}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ButtonPage
                        to="/automatism"
                        $primary={primary ? 1 : 0}
                        $dark={dark ? 1 : 0}
                        dar2={dark2 ? 1 : 0}
                    >{t("service_section.btn_automatism")}</ButtonPage>
                    <ServicesP>{t("service_section.p_automatism")}</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;