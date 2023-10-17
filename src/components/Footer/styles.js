import styled from "styled-components";


export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 35px 8px 35px;

  background: #E8E8E8;

  margin-top: 300px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
