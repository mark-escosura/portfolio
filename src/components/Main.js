import React, { lazy, useState, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// components
import Intro from './Intro';
import Loading from '../subComponents/Loading';
import { YinYang } from './AllSvgs';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'));
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'));

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 55%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: rotate(270deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 1s ease-in-out;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.text};
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;

  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  // state
  const [click, setClick] = useState(false);
  const [path, setPath] = useState('');
  // handlers
  const handleClick = () => setClick(!click);

  // configs
  const moveY = {
    y: '-100%',
  };
  const moveX = {
    x: `${path === 'work' ? '100%' : '-100%'}`,
  };

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key='modal'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === 'about' || path === 'skills' ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <LogoComponent theme={click ? 'dark' : 'light'} />
          <PowerButton />
          <SocialIcons theme={click ? 'dark' : 'light'} />
          <Center click={click}>
            <YinYang
              onClick={handleClick}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill='currentColor'
            />
            <span>click here</span>
          </Center>

          <Contact
            click={+false}
            target='_blank'
            to={{ pathname: 'mailto:escosuramarkse@gmail.com' }}
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi..
            </motion.h2>
          </Contact>

          <BLOG click={+false} onClick={() => setPath('blog')} to='/blog'>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h2>
          </BLOG>

          <WORK to='/work' click={click}>
            <motion.h2
              onClick={() => setPath('work')}
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
            </motion.h2>
          </WORK>

          <BottomBar>
            <ABOUT to='/about' click={click}>
              <motion.h2
                onClick={() => setPath('about')}
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About.
              </motion.h2>
            </ABOUT>

            <SKILLS to='/skills'>
              <motion.h2
                onClick={() => setPath('skills')}
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills.
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
