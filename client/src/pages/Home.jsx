import { Box } from "@chakra-ui/react";
import React from "react";
import About from "../components/MainBodyPart/About";
import Customer from "../components/MainBodyPart/Customer";
import Features from "../components/MainBodyPart/Features";
import GetStart from "../components/MainBodyPart/GetStart";
import Integration from "../components/MainBodyPart/Integration";
import Learn from "../components/MainBodyPart/Learn";
import Tracktime from "../components/MainBodyPart/Tracktime";
const Home = () => {
  return (
    <Box>
      <About />
      <GetStart />
      <Features />
      <Integration />
      <Customer />
      <Learn />
      <Tracktime />
    </Box>
  );
};

export default Home;
