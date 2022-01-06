import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import Card from "../subComponents/Card";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import { Work } from "../data/WorkData.js";

// import caspar from "../assets/images/Caspar.png"

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;

  display: flex;
  color: ${(props) => props.theme.text};
`;

const WorkPage = () => { 
  const ref = useRef(null)

  useEffect(() => {
 let element = ref.current;

 const rotate = () => {
   element.style.transform = `translateX(${-window.pageYOffset}px)`
 }

 window.addEventListener('scroll', rotate)
 return () => window.removeEventListener('scroll', rotate);
  }, [])


  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Main ref={ref}>
          {
          Work.map(work => {
              return <Card key={work.id} data={work}>Work Data</Card>;
          })
          }
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
