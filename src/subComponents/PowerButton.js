import { NavLink } from "react-router-dom";
import styled from "styled-components";

// components
import { PowerBtn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${(props) => props.theme.body};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  &>*:first-child{
      text-decoration: none;
      color: inherit;
  }
`;

const PowerButton = (props) => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
