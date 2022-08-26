import React from "react";
import { Box, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const Part3 = () => {
  return (
    <>
      <Box>
        <SimpleGrid
          gap={"25px"}
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "85%", xl: "85%" }}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        >
          <Box
            margin="40px 0px 40px 0px"
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
          >
            <Text
              margin="10px 0px 10px 0px"
              fontSize="5xl"
              fontFamily={"moutoweb sans-serif"}
            >
              Time tracking that works the way your team works
            </Text>
            <Text fontSize="23px" margin="20px 0px 20px 0px">
              Time tracking software is only useful if it’s actually used.
              That’s why we designed Harvest to be easy to adopt, integrated
              with your favorite apps, and flexible enough for all types of
              teams.
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Integrated with the tools your team already knows and loves
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Track time wherever you work - desktop, browser, and mobile
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Intuitive and easy to learn
            </Text>
          </Box>
          <Box margin="40px 0px 40px 0px">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg" />
            <Text
              marginTop="20px"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
              fontStyle="italic"
            >
              "We needed something super simple because we don’t want to have to
              teach people how to use it as part of onboarding.."
            </Text>
            <Text
              fontStyle="italic"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
            >
              Nick Frandsen, Dovetail
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

export default Part3;
