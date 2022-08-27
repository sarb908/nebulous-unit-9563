import React from "react";
import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Icon from "../components/WhyHarvest/Icon";
import Stories from "../components/Customer/Stories";
const Customer = () => {
  return (
    <Box bgColor="#fff8f1" border="1px solid #fff8f1">
      <HStack
        margin={"20px 0px 20px 0px"}
        alignItems="center"
        justifyContent="center"
        marginTop={"100px"}
      >
        <SimpleGrid
          width={{ base: "100%", sm: "90%", md: "90%", lg: "100%", xl: "100%" }}
        >
          <Text
            margin={"auto"}
            width={{
              base: "100%",
              sm: "100%",
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
            See how Harvest helps teams like yours thrive
          </Text>
          <Text
            margin={"auto"}
            width={{
              base: "100%",
              sm: "100%",
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
            Teams of all sizes, across industries, and around the world track
            time with Harvest.
          </Text>
        </SimpleGrid>
      </HStack>
      <SimpleGrid
        borderBottom={{
          base: "1px solid red",
          sm: "1px solid red",
          md: "1px solid red",
          lg: "1px solid red",
          xl: "1px solid red",
        }}
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        columns={{ base: 3, sm: 1, md: 1, lg: 2, xl: 3 }}
        marginTop={"40px"}
        marginButtom={"40px"}
      >
        <HStack
          borderTop={"1px solid red"}
          padding={"20px"}
          justifyContent={"space-between"}
          borderRight={{
            base: "1px solid red",
            sm: "0",
            md: "0",
            lg: "1px solid red",
            xl: "1px solid red",
          }}
        >
          <VStack>
            <Text fontSize={"4xl"}>70,000+</Text>
            <Text fontSize={"2xl"}>customers</Text>
          </VStack>
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg" />
        </HStack>
        <HStack
          borderTop={"1px solid red"}
          padding={"20px"}
          justifyContent={"space-between"}
          borderRight={{
            base: "1px solid red",
            sm: "0",
            md: "0",
            lg: "1px solid red",
            xl: "1px solid red",
          }}
        >
          <VStack>
            <Text fontSize={"4xl"}>2 billion</Text>
            <Text fontSize={"2xl"}>hours tracked</Text>
          </VStack>
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg" />
        </HStack>
        <HStack
          borderTop={"1px  solid red"}
          padding={"20px"}
          justifyContent={"space-between"}
        >
          <VStack>
            <Text fontSize={"4xl"}>19.6 million</Text>
            <Text fontSize={"2xl"}>invoices paid</Text>
          </VStack>
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg" />
        </HStack>
      </SimpleGrid>
      <SimpleGrid
        gap={"30px"}
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        margin="auto"
        marginTop={"50px"}
      >
        <Image
          borderRadius={"20px 0px 20px 0px"}
          _hover={{ borderRadius: "50px 0px 50px 0px" }}
          src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg"
        />
        <Box
          marrginTop={{ base: "100%", sm: "0", md: "0", lg: "30%", xl: "30%" }}
        >
          <Text color={"#fa5d00"} fontSize="2xl" fontWeight={"bold"}>
            FEATURED STORY
          </Text>
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
              base: "5xl",
              sm: "3xl",
              md: "40px",
              lg: "3xl",
              md: "3xl",
            }}
            fontFamily={" sans-serif"}
            textAlign={"left"}
          >
            Startup studio Dovetail tracks time with Harvest to build trust with
            clients.
          </Text>
          <Button
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "40%",
              xl: "40%",
            }}
            marginTop={"30px"}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"black"}
            height="50px"
            fontSize="20px"
            _hover={{ bgColor: "red" }}
            marginBottom="70px"
          >
            Read Customer Story
          </Button>{" "}
        </Box>
      </SimpleGrid>
      <Icon />
      <Stories />
    </Box>
  );
};

export default Customer;
