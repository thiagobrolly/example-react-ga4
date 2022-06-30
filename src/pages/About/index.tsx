import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import * as S from './styles';

export function About() {
  return (
    <>
      <Helmet>
        <title>Sobre GA4</title>
      </Helmet>
      <S.Container>
        <h1>Sobre GA4</h1>
        <Link id='btn-voltar-inicio' to="/">Voltar</Link>
      </S.Container>
    </>
  );
}
