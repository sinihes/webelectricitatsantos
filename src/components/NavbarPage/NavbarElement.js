import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const Nav = styled.nav`

    background-color: #000;
    height:80px;
    margin-top: -80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;


    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
    
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (min-width:992px){
        justify-content: space-between;
    }




`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;
    word-spacing: 8px;


    @media screen and (min-width:768px){
        font-size: 1.5rem;
    }

    @media screen and (min-width:992px){
        font-size: 2rem;
    }

`

export const MobileIcon = styled.div`
    display: block;
    font-size: 3rem;
    cursor: pointer;
    color: #fff;


    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }

`

export const NavMenu = styled(LinkR)`

`




/* Extras */

export const SwitchFlagsContainer = styled.div`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 1.5rem;
`

export const FlagIcon = styled.img`
width: 20px;
height: 20px;
background-color: yellow;
object-fit: cover;
display: block;
border-radius: 50%;
margin: 0 3px 0 3px;
`