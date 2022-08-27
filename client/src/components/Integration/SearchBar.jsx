import { Box, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Tracktime from "../MainBodyPart/Tracktime";
import Footer from "../Footer";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      `https://fathomless-coast-69464.herokuapp.com/integration?title=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, [query]);

  return (
    <Box>
      <SimpleGrid
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%" }}
      >
        <Box
          bgColor={"white"}
          padding={"10px"}
          borderRadius={"20px"}
          display={"flex"}
          border="1px solid"
        >
          <BiSearchAlt2 size={"40"} />
          <Input onChange={(e) => setQuery(e.target.value)} border={"none"} />
        </Box>
      </SimpleGrid>

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
        {data.map((el) => (
          <VStack
            bgColor={"white"}
            key={el._id}
            borderRadius={"20px"}
            padding={"20px"}
          >
            <Image src={el.image} />
            <Text fontSize={"2xl"}>{el.title}</Text>
            <Text fontWeight={"100"} fontSize={"20px"}>
              {el.description}
            </Text>
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

export default SearchBar;
