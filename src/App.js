// methods
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { LightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import Loading from "./subComponents/Loading";
import "./App.css";

// Components
const AboutPage = lazy(() => import("./components/AboutPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const Main = lazy(() => import("./components/Main"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <Suspense fallback={<Loading />}>

          {/* for frame-motion animation on page change */}
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/skills" component={MySkillsPage} />
            </Switch>
          </AnimatePresence>

        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
