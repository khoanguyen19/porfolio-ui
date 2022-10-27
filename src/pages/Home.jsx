import React from "react";
// import styled from "styled-components";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Reel from "../components/Reel";

// const Container = styled.div`
//   background-color: #191919;
//   height: 100000px;
//   position: relative;
// `;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Reel />
    </div>
  );
};

export default Home;
