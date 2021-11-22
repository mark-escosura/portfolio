import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// components
import { Github, Twitter, Facebook, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
display:flex;
flex-direction: column;
align-items: center;

position:fixed;
bottom:0;
left: 3rem;

z-index:3;

&>*:not(last-child){
      margin: 0.5rem 0;
  }
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text};
`

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.github.com/mark-escosura"}}>
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.twitter.com"}}>
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com"}}>
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.youtube.com"}}>
          <YouTube width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>

      <Line />
    </Icons>
  );
};

export default SocialIcons;
