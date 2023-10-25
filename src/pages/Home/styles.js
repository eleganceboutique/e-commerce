import styled from "styled-components";
import bannerHome from '../../assets/banner_home.png';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Hero = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: block;
    background-image: url(${bannerHome});
    height: 700px;
    width: 100%;

    h1 {
      color: #fff;
      font-size: 3rem;
      font-weight: lighter;
      position: absolute;
      top: 180px;
      left: 40px;
      text-transform: uppercase;
     }

     .male {
      top: 240px;
     }

     button {
      position: absolute;
      bottom: 280px;
      left: 85px;
     }
`

export const Releases = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
  }

  p {
    color: 555555;
  }
`

export const Grid = styled.div`
  display: grid;
`
