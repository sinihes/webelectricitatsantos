import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    SidebarContainer,
    ClosedIcon,
    Icon,
    SiderbarWrapper,
    SiderbarMenu,
    SiderbarLink,
    SiderbarRoute,
    SideBtnWrap,

    } from './SiderbarElement'

const Siderbar = ({isOpen, toggle}) => {
    /* Hock lenguage */
    const [t] = useTranslation("global")
    return (
        <SidebarContainer  isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
             <ClosedIcon/>
            </Icon>
            <SiderbarWrapper>
                <SiderbarMenu>
                    <SiderbarLink to='about'onClick={toggle}>
                   { t("siderbar.business")}
                    </SiderbarLink>
                    <SiderbarLink to='discover'onClick={toggle}>
                    { t("siderbar.descover")}
                    </SiderbarLink>
                    <SiderbarLink to='services'onClick={toggle}>
                    { t("siderbar.service")}
                    </SiderbarLink>
                    <SiderbarLink to='blog'onClick={toggle}>
                    { t("siderbar.blog")}
                    </SiderbarLink>
                </SiderbarMenu>
                <SideBtnWrap>
                    <SiderbarRoute to='/contact'>{t("siderbar.contact")}</SiderbarRoute>
                </SideBtnWrap>
            </SiderbarWrapper>
        </SidebarContainer>
    )
}

export default Siderbar
