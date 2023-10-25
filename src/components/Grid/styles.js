import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;


  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
