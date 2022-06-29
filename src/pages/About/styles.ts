import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h1{
    margin: 2rem 0 5rem;
  }

  button{
    margin: 1rem;
    padding: 1rem 2rem;
    background: #33cc95;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    transition: background .3s;

    &:hover{
      background: #0D5969;
    }
  }
`;