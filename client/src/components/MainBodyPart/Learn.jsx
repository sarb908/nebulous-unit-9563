import {
  Box,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Learn = () => {
  return (
    <Box draggable>
      <Divider
        backgroundColor={"red"}
        orientation="horizontal"
        width={"80%"}
        margin="auto"
      />
      <SimpleGrid
        margin={"auto"}
        textAlign={"left"}
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
      >
        <Box marginTop={"40px"} width={{ base: "100%", xl: "100%" }}>
          <Text
            marginTop={"40px"}
            color={"#fa5d00"}
            fontSize="2xl"
            fontWeight={"bold"}
          >
            LEARNING RESOURCES
          </Text>
          <Text fontSize={"4xl"}>Supporting your team along the way</Text>
        </Box>
        <VStack margin={"40px 0px 40px 0px"}>
          <HStack
            _hover={{ bgColor: "red.100", color: "red" }}
            borderTop={"1px solid red"}
            padding="10px"
          >
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg" />
            <Box>
              <Text fontSize={"2xl"}>Guides and templates</Text>
              <Text fontWeight={"bold"}>
                Learn how to introduce your team to time tracking and make the
                most of Harvest.
              </Text>
            </Box>
            <ArrowForwardIcon w={8} h={8} color="red" />
          </HStack>
          <HStack
            _hover={{ bgColor: "red.100", color: "red" }}
            borderTop={"1px solid red"}
            padding="10px"
          >
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg" />
            <Box>
              <Text fontSize={"2xl"}>Webinars</Text>
              <Text fontWeight={"bold"}>
                Watch a quick intro to Harvest or sign up for a live session
                with one of our Experts.
              </Text>
            </Box>
            <ArrowForwardIcon w={8} h={8} color="red" />
          </HStack>
          <HStack
            _hover={{ bgColor: "red.100", color: "red" }}
            borderTop={"1px solid red"}
            borderBottom="1px solid red"
            padding="10px"
          >
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg" />
            <Box>
              <Text fontSize={"2xl"}>Help Center</Text>
              <Text fontWeight={"bold"}>
                Find the answers to all your questions or get in touch with one
                of our friendly Experts.
              </Text>
            </Box>
            <ArrowForwardIcon w={8} h={8} color="red" />
          </HStack>
        </VStack>
      </SimpleGrid>
      <Divider
        backgroundColor={"red"}
        orientation="horizontal"
        width={"100%"}
        margin="auto"
      />
    </Box>
  );
};

export default Learn;
