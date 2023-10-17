import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>E-commerce</h1>
      {/* <Button
        text="Comprar mais"
        backgroundColor="transparent"
        textColor="#fff"
        borderColor="#fff"
        borderWidth="3.5px"
        borderStyle="solid"
      />
      <Button
        text="Ver mais"
        backgroundColor="#024E82"
        textColor="white"
        borderWidth="0px"
        hoverBackgroundColor="purple"
      /> */}
    </ThemeProvider>
  );
}

export default App;
