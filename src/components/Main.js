import React from "react";
import styled from "styled-components";

// components
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";

const MainContainer = styled.div`
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
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
      </Container>
    </MainContainer>
  );
};

export default Main;
