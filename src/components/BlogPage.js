import React, { lazy, Suspense } from "react";
import styled from "styled-components";

// assets
import img from "../assets/images/blog-background-img.png";

// data
import { Blogs } from "../data/BlogData";
import { motion } from "framer-motion";

// components
import BlogComponent from "../components/BlogComponent";
import Loading from "../subComponents/Loading";
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  /* width: 100vw; */
  /* height: 110vh; */
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

// Framer-motion config

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons />
          <Center>
            <Grid variants={container} initial="hidden" animate="show">
              {Blogs.map((blog) => {
                return <BlogComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
          <BigTitle text="BLOG" top="5rem" left="5rem" />
        </Container>
      </MainContainer>
    </Suspense>
  );
};

export default BlogPage;
