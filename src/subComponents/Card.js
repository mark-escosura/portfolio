import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};

  transition: all 1s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    cursor: auto;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.4vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
  cursor: pointer;

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border-radius: 0 50px 0 0;
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-left: 2rem;
  cursor: pointer;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer-motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variants={Item}>
      {/* Title */}
      <Title>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {name}
        </motion.div>
      </Title>
      {/* Description */}
      <Description>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {description}
        </motion.div>
      </Description>
      {/* Tags */}
      <Tags>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </motion.div>
      </Tags>
      {/* Footer */}
      <Footer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to={{ pathname: `${demo}` }} target="_blank">
            Visit
          </Link>
          <Git to={{ pathname: `${github}` }} target="_blank">
            <Github width={30} height={30} />
          </Git>
        </motion.div>
      </Footer>
    </Box>
  );
};

export default Card;
