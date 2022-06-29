import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    margin: 1.5rem;
    color: #fff;
    text-decoration: none;
    transition: color .3s;

    &:hover{
      color: #33cc95;
    }
  }
`;
