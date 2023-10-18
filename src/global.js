import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  * {
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;
