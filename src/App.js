// methods
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import "./App.css";

// components
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
