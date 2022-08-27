import React from "react";
import { Box, HStack, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import img from "../pages/image/integration.png";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchBar from "../components/Integration/SearchBar";
const Integration = () => {
  return (
    <Box bgColor="#fff8f1" border="1px solid #fff8f1">
      <HStack margin={"20px 0px 20px 0px"} marginTop={"100px"}>
        <SimpleGrid
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "100%", xl: "100%" }}
        >
          <Box margin={"auto"}>
            <Text
              margin={"auto"}
              width={{
                base: "100%",
                sm: "90%",
                md: "100%",
                lg: "60%",
                xl: "80%",
              }}
              fontSize={{
                base: "5xl",
                sm: "40px",
                md: "40px",
                lg: "5xl",
                md: "5xl",
              }}
              fontFamily={" sans-serif"}
              textAlign={"left"}
            >
              Time tracking integrated with your team’s favorite apps
            </Text>
            <Text
              margin={"auto"}
              width={{
                base: "100%",
                sm: "90%",
                md: "100%",
                lg: "60%",
                xl: "80%",
              }}
              fontSize={{
                base: "5xl",
                sm: "3xl",
                md: "40px",
                lg: "3xl",
                md: "3xl",
              }}
              fontFamily={" sans-serif"}
              textAlign={"left"}
            >
              Harvest works with the most popular tools so your team can track
              time effortlessly.
            </Text>
          </Box>
          <Image src={img} />
        </SimpleGrid>
      </HStack>
      <SearchBar />
    </Box>
  );
};

export default Integration;
