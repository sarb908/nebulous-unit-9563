import React from "react";
import Icon from "../components/WhyHarvest/Icon";
import Part1 from "../components/WhyHarvest/Part1";
import Part2 from "../components/WhyHarvest/Part2";
import Part3 from "../components/WhyHarvest/Part3";
import Part4 from "../components/WhyHarvest/Part4";
import Part5 from "../components/WhyHarvest/Part5";
import Footer from "../components/Footer";
import Tracktime from "../components/MainBodyPart/Tracktime";
import { Box } from "@chakra-ui/react";
const WhyHarvest = () => {
  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Icon />
      <Tracktime />
      <Box bgColor={"white"} height={"20px"}></Box>
      <Footer />
    </>
  );
};

export default WhyHarvest;
