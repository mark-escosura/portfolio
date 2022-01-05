import React from "react";
import styled, { /*keyframes ,*/ ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
 
// import caspar from "../assets/images/Caspar.png"

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

// const float = keyframes
// 0% { transform: translateY(-10px)}
// 50% { transform: translateY(-20px) translateX(20px)}
// 100% { transform: translateY(-10px)}
// `;

// const Caspar = styled.div`
//   position: absolute;
//   top: 25%;
//   right : -12%;
//   width: 60vw;
//   animation: ${float} 5s ease infinite;
//   img {
//     width: 100%;
//     height: auto;
//   }
// `;



const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    border-radius: 2rem 0 2rem 0;
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 15vw;
    height: 40vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 25%;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Main>
            workpage
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
