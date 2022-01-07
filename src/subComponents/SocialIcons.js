import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// components
import { Github, Twitter, Facebook, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 3rem;

  z-index: 3;

  & > *:not(last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div whileHover={{ scale: 1.3 }}>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.github.com/mark-escosura" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }}>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.twitter.com" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }}>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3 }}>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.youtube.com" }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
