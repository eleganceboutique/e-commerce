import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>E-commerce</h1>
    </ThemeProvider>
  );
}

export default App;
