import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1rem;

  button{
    border: none;
    color: var(--gray);
    background-color: var(--darkblue);
    span{
        
    }
  }

  button + button{
    margin-left: 1rem;
  }

  

`;
