import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/images/avatar-full-body.png";
import Me2 from "../assets/images/avatar-red-tie.png";
import Me3 from "../assets/images/avatar-brown-sweater.png";
import Me4 from "../assets/images/avatar-shoulder-bag.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw;
  height: 55vh;
  display: flex;

  // below gradient is to create 2 color border
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 3rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {

  // array of images
  const pics = [Me, Me2, Me3, Me4]

  // handler
  const getRandomPic = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    //get random item
    const item = arr[randomIndex];

    return item;
  }
  // call function
  const randomPic = getRandomPic(pics)

  return (
    <Box
    initial={{height: 0}}
    animate={{height: '55vh'}}
    transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1> Hi,</h1>
          <h3> I'm MarkInTech</h3>
          <h6> FrontEnd Dev in the making.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1, delay: 1.5 }}
        >
        <img className="pic" src={randomPic} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
