import {
  Box,
  Button,
  Divider,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const GetStart = () => {
  return (
    <>
      <Box bg="#fff8f1" marginTop={"40px"} draggable>
        <Text fontSize={"4xl"} textAlign={"center"}>
          Getting Started
        </Text>
        <Text fontSize={"2xl"} textAlign={"center"} width="80%" margin={"auto"}>
          Time tracking so easy, your team will actually use it.
        </Text>
        <SimpleGrid
          columns={{ base: 3, sm: 1, md: 2, lg: 3, xl: 3 }}
          width="80%"
          gap={"40px"}
          margin="auto"
          marginTop={"30px"}
        >
          <Box>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png" />
            <Text marginTop={"10px"} fontSize={"2xl"}>
              Create a Project
            </Text>
            <Text marginTop={"5px"}>
              Create entries for your projects and tasks, or import them via one
              of our integrations.
            </Text>
          </Box>
          <Box>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png" />
            <Text marginTop={"10px"} fontSize={"2xl"}>
              Track time
            </Text>
            <Text marginTop={"5px"}>
              Click start to begin tracking time. Stop and start timers as you
              switch tasks.
            </Text>
          </Box>
          <Box>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png" />
            <Text marginTop={"10px"} fontSize={"2xl"}>
              Generate reports & invoices
            </Text>
            <Text marginTop={"5px"}>
              Easily convert time entries into internal reporting or client
              invoices.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "30%", lg: "30%", xl: "20%" }}
        >
          <Button
            marginTop={"30px"}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"#fa5d00"}
            fontSize="20px"
            height={"60px"}
            _hover={{ bgColor: "red" }}
            marginBottom="70px"
          >
            Get Started {">"}
          </Button>
        </SimpleGrid>
        <Divider
          backgroundColor={"red"}
          orientation="horizontal"
          width={"80%"}
          margin="auto"
        />
      </Box>
    </>
  );
};

export default GetStart;
