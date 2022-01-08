import React, { lazy } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

// assets
import caspar from "../assets/images/Caspar.png";

//components
import { DarkTheme } from "./Themes";
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(-50px) translateX(-40px)}
100% { transform: translateY(-10px)}
`;

const Caspar = styled(motion.div)`
  position: absolute;
  width: 60vw;
  animation: ${float} 5s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />

        <Caspar
          initial={{ right: "-50%", top: "70%", opacity: 0 }}
          animate={{ right: "-15%", top: "30%", opacity: 1 }}
          transition={{ duration: 4, delay: 0.5 }}
        >
          <img src={caspar} alt="caspar" />
        </Caspar>

        <Main>
          I'm a front-end developer located in California. I love to create
          simple yet beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole front-end with a little bit of back-end. I
          love trying new things and building great projects.
          <br />
          <br />I believe everything is art when you put your consciousness in
          it. You can connect with me via email or social media.
        </Main>
        <BigTitle text="ABOUT" top="2rem" right="2rem" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
