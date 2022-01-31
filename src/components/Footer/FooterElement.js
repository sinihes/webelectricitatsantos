import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const FooterContainer = styled.footer`
background-color: #101522;
width: 100%;
position: relative;
bottom:0;
left: 0;
`

export const FooterWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (min-width: 576px) {
    justify-content: space-around;
    flex-direction: row;
}

` 

export const SocialLogo = styled(Link)`
color: #fff;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
margin-top: 16px;
font-weight: bold;

`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
margin-top: 16px;
`




export const SocialIconLink = styled.a`
color: #fff;
`