import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import flagEs from '../../images/flags/flag-es.svg';
import flagCat from '../../images/flags/flag-cat.svg';
import {useTranslation} from 'react-i18next';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    MobileIcon,
    NavBtnLink,
    NavBtn,
    SwitchFlagsContainer,
    FlagIcon,
} from './NavbarElement'


const Navbar = ({ toggle }) => {
    /* Hock Lenguage */
    const [t, i18n] = useTranslation("global")
    
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>{t("navbar.title")}</NavLogo>
                        <SwitchFlagsContainer>
                            <FlagIcon alt='bandera de españa, cambio de idioma.' onClick={()=>i18n.changeLanguage("es")}  src={flagEs}/>
                            <FlagIcon alt='bandera de cataluña, cambio de idioma.' onClick={()=>i18n.changeLanguage("cat")} src={flagCat}/>
                        </SwitchFlagsContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks activeClass='active' to='about' spy={true} smooth={true} duration={500} offset={-80} exact="true">{t("siderbar.business")}</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover' spy={true} smooth={true} duration={500} exact="true" offset={-80}>{t("siderbar.descover")}</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services' spy={true} smooth={true} duration={500} exact="true" offset={-80}>{t("siderbar.service")}</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='blog' spy={true} smooth={true} duration={500} exact="true" offset={-80}>{t("siderbar.blog")}</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/contact' $spy={true} $smooth={true} duration={500} exact="true" offset={-80}>{t("siderbar.contact")}</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
