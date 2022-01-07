import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { Work } from "../data/WorkData.js";
import { YinYang } from "./AllSvgs";

import BigTitle from "../subComponents/BigTitle";
import Card from "../subComponents/Card";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;
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

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`

const WorkPage = () => { 
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
 let element = ref.current;

 const rotate = () => {
   element.style.transform = `translateX(${-window.pageYOffset}px)`

   yinyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
 }

 window.addEventListener('scroll', rotate)
 return () => window.removeEventListener('scroll', rotate);
  }, [])


  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />

        <Main ref={ref}>
          {
          Work.map(work => {
              return <Card key={work.id} data={work}>Work Data</Card>;
          })
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text}/>
        </Rotate>
        <BigTitle text="WORK" top="70%" right="35%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
