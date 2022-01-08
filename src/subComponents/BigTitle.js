import styled from "styled-components";
import { motion } from "framer-motion";

const Text = styled(motion.h1)`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);

  z-index: 0;
`;

const BigTitle = (props) => {
  return (
    <Text
      top={props.top}
      left={props.left}
      right={props.right}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.3 }}
    >
      {props.text}
    </Text>
  );
};

export default BigTitle;
