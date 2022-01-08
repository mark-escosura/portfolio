import styled from "styled-components";
import { LightTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${(props) => props.color === 'light' ? LightTheme.text : LightTheme.body };
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
  <Logo color={props.theme} whileHover={{scale: 1.2}}>
    MIT
    </Logo>
  );
};

export default LogoComponent;
