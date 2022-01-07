import React from "react";
import styled from "styled-components";

// assets
import img from "../assets/images/blog-background-img.png";

// components
import BigTitle from "../subComponents/BigTitle";
import BlogComponent from "../components/BlogComponent";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

// data
import { Blogs } from "../data/BlogData";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 110vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
