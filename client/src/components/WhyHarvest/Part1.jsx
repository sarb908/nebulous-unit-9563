import React from "react";
import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const Part1 = () => {
  return (
    <>
      <Box bgColor="#fff8f1" border="1px solid #fff8f1">
        <HStack
          margin={"20px 0px 20px 0px"}
          alignItems="center"
          justifyContent="center"
          marginTop={"100px"}
        >
          <SimpleGrid
            textAlign={"left"}
            width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
          >
            <Box>
              <Text
                fontSize="5xl"
                fontFamily={"moutoweb sans-serif"}
                textAlign={"center"}
              >
                Help your team spend time wisely
              </Text>
              <Text
                margin="auto"
                textAlign={"center"}
                marginTop={"10px "}
                marginBottom="10px"
                fontSize={"3xl"}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "60%",
                  xl: "67%",
                }}
              >
                Harvest time tracking makes it easy to capture time, gain
                insights from past projects, and get paid for your work.
              </Text>
            </Box>
          </SimpleGrid>
        </HStack>
        <HStack
          columns={{ base: 2, sm: 1 }}
          alignItems={"center"}
          justifyContent="center"
        >
          <Button
            width={{
              base: "100%",
              sm: "80%",
              md: "90%",
              lg: "20%",
              xl: "20%",
            }}
            marginTop={"30px"}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"#fa5d00"}
            height="50px"
            fontSize="20px"
            _hover={{ bgColor: "red" }}
            marginBottom="70px"
          >
            Try Harvest Free
          </Button>
          <Text fontStyle={"italic"} fontWeight={"100"}>
            Free 30-day trial. No Credit Card Required
          </Text>
        </HStack>
      </Box>
      <Box
        margin={"auto"}
        width={"100%"}
        borderBottom={"1px solid #fa5d00"}
      ></Box>
    </>
  );
};

export default Part1;
