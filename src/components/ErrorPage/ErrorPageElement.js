import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
height: 100;
display: flex;
flex-direction: column;
max-height: 100vh;
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;

overflow: hidden;
background: linear-gradient(
    108deg,
    rgba(1,147,81,1)0%,
    rgba(10,201,122,1)100%
); 

`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;
text-shadow: 2px 3px 2px #333 ;
`


export const ContainerCard = styled.div`
margin-top: auto;
margin-bottom: auto;
align-self: center;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (min-width: 1200px) {
    width: 80%;
}

`

export const CardImg = styled.img`
width: 80%;
display: block;
@media screen and (min-width: 1200px) {
    width: 60%;
}
`


const typing = keyframes`
from {width:0}
`
const blink = keyframes`
50% {border-color: transparent}
`


export const CardTitle = styled.h2`
white-space: nowrap;
font-size: 46px;
border-right: 4px solid;
text-shadow: 2px 3px 2px #333 ;
width: 10ch;
animation: ${typing} 2s steps(12),
            ${blink} .5s infinite step-end alternate;
overflow: hidden;


@media screen and (min-width: 1100px) {
    font-size: 150px;
}

`

export const CardP = styled.p`
font-size: 25px;
text-shadow: 2px 3px 2px #333 ;

@media screen and (min-width: 1100px) {
    font-size: 36px;
}

`

