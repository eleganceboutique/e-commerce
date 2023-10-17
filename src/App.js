import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyle } from './global';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
      /> */}
      <Header />
    </ThemeProvider>
  );
}

export default App;
