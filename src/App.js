// methods
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import "./App.css";

// components
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>

{/* for frame-motion animation on page change */}
<AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
</AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
