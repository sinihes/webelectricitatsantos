import styled from 'styled-components';


export const InfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
background-color: rgba(0,0,0, 0.95);
margin-top: 5rem;
padding-top: 2rem;
height: 100vh;

 @media screen and (min-width: 768px) {
    margin-top: 5rem;
     padding: 8px 0;
 }

 @media screen and (min-width: 1200px) {
    margin-top: 5rem;
     padding: 8px 0;
 }

`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 5px #01BF71;
    border-radius: 5px;
    z-index: 1;
    background-color: #fff;
    padding: 3rem;



    @media screen and (min-width: 768px) {
    width: 80%;
 }




`;

export const InfoRow = styled.div`
align-items: center;

`;


export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: bold;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;


@media screen and (min-width: 768px) {
   font-size: 2rem;
   margin-bottom: 64px;
 }



`


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 32px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f9f9f9' : '#010606')}; 


@media screen and (max-width: 480px){
    font-size: 32px;
}
`


export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
margin-left: 1rem;
font-size: 24px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')}; 

`




export const ImgWrap = styled.div`
color: #333;
font-size: 5rem;
`


export const IconContainer = styled.div`
width: 100%;
display: flex;
flex-wrap:wrap;
align-items: center;
color: #333;
font-size: 3rem;
margin-bottom: 1rem;
`

export const ButtonMap = styled.a`
margin-left: 2rem;
margin-bottom: 1rem;
border-radius: 50px;
background-color: ${({primary}) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap ;
padding:${({big}) => (big ? '14px 45px' : '12px 30px')} ;
color:${({dark}) => (dark ? '#010606' : '#fff')} ;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
text-decoration: none;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background-color: ${({primary}) => (primary ? '#fff' : '#01BF71')};
}

`


export const Button = styled(ButtonMap)`

`;