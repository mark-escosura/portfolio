// imports
import React, { useRef, useEffect, lazy, Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';

// data
import { Work } from '../data/WorkData.js';

// components
import { YinYang } from './AllSvgs';
import Card from '../subComponents/Card';
import Loading from '../subComponents/Loading';
const BigTitle = lazy(() => import('../subComponents/BigTitle'));
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'));
const ParticleComponent = lazy(() =>
  import('../subComponents/ParticleComponent')
);
const PowerButton = lazy(() => import('../subComponents/PowerButton'));
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'));

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 350vh;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Main = styled(motion.ul)`
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
`;

// Framer-motion configuration

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };

    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key='work'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme='dark' />
          <SocialIcons theme='dark' />
          <PowerButton theme='dark' />
          <ParticleComponent theme='dark' />

          <Main ref={ref} variants={container} initial='hidden' animate='show'>
            {Work.map((work) => {
              return <Card key={work.id} data={work} />;
            })}
          </Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>
          <BigTitle text='WORK' top='70%' right='35%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
