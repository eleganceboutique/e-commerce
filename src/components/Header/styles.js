import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 35px 8px 35px;
  background: #fff !important;
`

export const Icons = styled.div`
  display: flex;
  gap: 15px;
`

export const Elipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 30px;

  border-radius: 50%;
  color: #fff;
  font-size: 0.7rem;
  background: #024E82;

  @media (max-width: 440px) {
    top: 40px;
  }
`
