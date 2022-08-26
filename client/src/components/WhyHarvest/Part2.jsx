import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "@chakra-ui/icons";
const Part2 = () => {
  return (
    <>
      <Box>
        <SimpleGrid
          gap={"25px"}
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        >
          <Box margin="40px 0px 40px 0px">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" />
            <Text
              marginTop="20px"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
              fontStyle="italic"
            >
              "As a growing business, with Harvest  we get a lot of insights and
              intelligence that we couldn’t get before."
            </Text>
            <Text
              fontStyle="italic"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
            >
              Ben Graham, Turnstyle
            </Text>
          </Box>
          <Box margin="40px 0px 40px 0px">
            <Text
              fontSize="5xl"
              fontFamily={"moutoweb sans-serif"}
              margin="10px 0px 10px 0px"
            >
              Empower your team with insight
            </Text>
            <Text fontSize="23px" margin="20px 0px 20px 0px">
              By tracking time and expenses in Harvest, you capture critical
              project data that allows you to learn from the past, keep current
              projects on track, and better estimate future projects.
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Review past data to improve how you scope and price work
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Understand which projects are profitable — and why
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Know when to take on new business (or grow your team)
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          width={{ base: "90%", sm: "90%", md: "90%", lg: "20%", xl: "20%" }}
          margin="auto"
        >
          <Button
            marginTop={"30px"}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"black"}
            height="50px"
            fontSize="20px"
            _hover={{ bgColor: "red" }}
            marginBottom="70px"
          >
            Browser Features
          </Button>
        </SimpleGrid>
      </Box>
      <Box
        margin={"auto"}
        width={"86%"}
        borderBottom={"1px solid #fa5d00"}
      ></Box>
    </>
  );
};

export default Part2;
