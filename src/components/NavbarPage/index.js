import React from 'react';
import {IoArrowBackCircleSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import flagEs from '../../images/flags/flag-es.svg';
import flagCat from '../../images/flags/flag-cat.svg';
import {useTranslation} from 'react-i18next';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    MobileIcon,
    SwitchFlagsContainer,
    FlagIcon,
} from './NavbarElement'


const NavbarPage = () => {
    /* Hock Lenguage */
    const [t, i18n] = useTranslation("global")

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>{t("navbar.title")}</NavLogo>
                        <SwitchFlagsContainer>
                            <FlagIcon onClick={()=>i18n.changeLanguage("es")}  src={flagEs}/>
                            <FlagIcon onClick={()=>i18n.changeLanguage("cat")} src={flagCat}/>
                        </SwitchFlagsContainer>
                        <MobileIcon >
                            <NavMenu to='/'>
                            <IoArrowBackCircleSharp />
                            </NavMenu>
                        </MobileIcon>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavbarPage
