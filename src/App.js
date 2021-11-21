import { ThemeProvider } from "styled-components";
import "./App.css";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>App File</ThemeProvider>
    </div>
  );
}

export default App;
