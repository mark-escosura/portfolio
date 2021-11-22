import React from "react";
import styled from "styled-components";
import { LightTheme } from "../components/Themes";

const Logo = styled.h1`
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
  <Logo color={props.theme}>
    MIT
    </Logo>
  );
};

export default LogoComponent;
