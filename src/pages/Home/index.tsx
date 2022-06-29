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
          <button onClick={() => alert("Click One")} id="btn-test-one" type="button">
            Click One
          </button>
          <button onClick={() => alert("Click Two")} id="btn-test-two" type="button">
            Click Two
          </button>
        </div>
      </S.Container>
    </>
  );
}
