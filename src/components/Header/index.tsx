import { Link } from 'react-router-dom';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </S.Content>
    </S.Container>
  );
}
