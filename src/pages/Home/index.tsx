import { Helmet } from 'react-helmet';
import * as S from './styles';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <S.Container>
        <h1>Home</h1>
        <div>
          <button onClick={() => alert("Click Depositar")} id="btn-click-depositar" type="button">
            Depositar
          </button>
          <button onClick={() => alert("Click Sacar")} id="btn-click-sacar" type="button">
            Sacar
          </button>
        </div>
      </S.Container>
    </>
  );
}
