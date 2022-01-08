import Particles from "react-tsparticles";
import styled from "styled-components";

import configLight from "../configs/particlesjs-config-light.json"
import configDark from "../configs/particlesjs-config-dark.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = (props) => {
  return <Box>
    <Particles style={{position: 'absolute'}} params={props.theme === "light" ? configLight : configDark } />
  </Box>;
};

export default ParticleComponent;
