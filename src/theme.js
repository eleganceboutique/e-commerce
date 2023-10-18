import { css } from "styled-components";

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
  font-family: 'Roboto Slab', serif;
`;


const theme = {
  colors: {
    primary: '#024E82',
    secondary: 'green',
    background: 'white',
    text: 'black',
  },
  fonts: {
    logo: RobotoFont,
  },
};

export default theme;
