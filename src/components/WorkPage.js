import React, { useRef, useEffect } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import Card from "../subComponents/Card";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import { Work } from "../data/WorkData.js";
import { YinYang } from "./AllSvgs";

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

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;

animation: ${rotate} infinite 1.5s linear;
`

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
        <Rotate>
          <YinYang width={80} height={80} fill={DarkTheme.text}/>
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
