import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tracktime from "../MainBodyPart/Tracktime";
import Footer from "../Footer";
const Stories = () => {
  const [stories, setStories] = useState([]);
  const storiesData = () => {
    fetch("https://fathomless-coast-69464.herokuapp.com/customer")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(stories);
  useEffect(() => {
    storiesData();
  }, []);
  return (
    <Box>
      <SimpleGrid
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        margin="auto"
        marginTop={"50px"}
      >
        <Text
          margin={"auto"}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          fontSize={{
            base: "6xl",
            sm: "3xl",
            md: "40px",
            lg: "5xl",
            md: "5xl",
          }}
          fontFamily={" sans-serif"}
          textAlign={"left"}
        >
          Find stories from teams like yours
        </Text>
      </SimpleGrid>
      <SimpleGrid
        _hover={{ cursor: "pointer" }}
        margin={"auto"}
        gap="30px"
        columns={{ base: 100, sm: 2, md: 2, lg: 3, xl: 4 }}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        marginTop={"50px"}
      >
        {stories.map((el) => (
          <VStack
            bgColor={"white"}
            key={el._id}
            borderRadius={"20px"}
            padding={"20px"}
          >
            <Image src={el.image} />
            <Text fontSize={"20px"}>{el.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
      <Box height={"20px"}></Box>
      <Tracktime />
      <Box bgColor={"white"} height={"20px"}></Box>
      <Footer />
    </Box>
  );
};

export default Stories;
