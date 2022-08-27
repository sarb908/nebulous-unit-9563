import React from "react";
import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
const Part4 = () => {
  return (
    <>
      <Box>
        <SimpleGrid
          gap={"25px"}
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "87%", xl: "87%" }}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        >
          <Box margin="40px 0px 40px 0px">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg" />
            <Text
              marginTop="20px"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
              fontStyle="italic"
            >
              "We can see if a project is in danger of going off track and
              course-correct way before it actually becomes a problem."
            </Text>
            <Text
              fontStyle="italic"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
            >
              Michael Kucera, Zehner
            </Text>
          </Box>
          <Box margin="40px 0px 40px 0px">
            <Text
              fontSize="5xl"
              fontFamily={"moutoweb sans-serif"}
              margin="10px 0px 10px 0px"
            >
              Keep your projects on track
            </Text>
            <Text fontSize="23px" margin="20px 0px 20px 0px">
              Harvest provides visibility into the key aspects of your
              projects—budget, team capacity, and costs—enabling you to keep
              everything on time and on budget.
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Clear visual reports allow you to compare actual time vs. budget
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Get more accurate timesheet and cost data
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Pinpoint which tasks are impacting costs
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

export default Part4;
