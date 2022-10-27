import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import ImageGallery from "../components/ImageGallery";

const Container = styled.div``;

const content = {
  name: "Design",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque fugit laboriosam!",
};

const Design = () => {
  return (
    <Container>
      <Navbar />
      <Intro content={content} />
      <ImageGallery />
    </Container>
  );
};

export default Design;
