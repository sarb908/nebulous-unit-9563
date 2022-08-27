import { Box } from "@chakra-ui/react";
import React from "react";
import CustomerA from "../components/Features/CustomerA";
import Everything from "../components/Features/Everything";
import TimeTracking from "../components/Features/TimeTracking";
import Report from "../components/Features/Report";
import CustomerB from "../components/Features/CustomerB";
import Invoicing from "../components/Features/Invoicing";
import Tracktime from "../components/MainBodyPart/Tracktime";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <Box>
      <Everything />
      <TimeTracking />
      <CustomerA />
      <Report />
      <CustomerB />
      <Invoicing />
      <Tracktime />
      <Box bgColor={"white"} height={"20px"}></Box>
      <Footer />
    </Box>
  );
};

export default Features;
