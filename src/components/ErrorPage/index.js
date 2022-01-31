import React from 'react';
import erroSVG from '../../images/error.svg';
import {Helmet} from 'react-helmet';
import {
  Container,
  Icon,
  ContainerCard,
  CardImg,
  CardP,
  CardTitle,
} from './ErrorPageElement'


const ErrorPage= () => {
  return (
<>
<Helmet>
            <title>Pagina no encontrada</title>
        </Helmet>
<Container>
  <Icon to='/'>RETURN</Icon>
  <ContainerCard>
    <CardImg src={erroSVG}/>
    <CardTitle>¡ Error 404 !</CardTitle>
    <CardP>Page not found</CardP>
  </ContainerCard>
</Container>
</>
  );
};

export default ErrorPage;