import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
const Features = () => {
  return (
    <Box marginTop={"40px"}>
      <SimpleGrid
        textAlign={"left"}
        marginLeft={{
          base: "1000px",
          sm: "30px",
          md: "30px",
          lg: "100px",
          xl: "150px",
        }}
      >
        <Text color={"#fa5d00"} fontSize="2xl" fontWeight={"bold"}>
          FEATURES
        </Text>
      </SimpleGrid>
      <SimpleGrid
        textAlign={"left"}
        marginLeft={{
          base: "1000px",
          sm: "30px",
          md: "30px",
          lg: "100px",
          xl: "150px",
        }}
      >
        <Text fontSize={"5xl"}>
          Everything you need to keep your team ticking
        </Text>
      </SimpleGrid>
      <SimpleGrid
        textAlign={"left"}
        marginLeft={{
          base: "1000px",
          sm: "30px",
          md: "30px",
          lg: "100px",
          xl: "150px",
        }}
        width="90%"
      >
        <Text fontSize={"3xl"} fontWeight="100" marginBottom={"30px"}>
          Time tracking software that helps you keep time and get insights.
        </Text>
      </SimpleGrid>
      <SimpleGrid
        gap={"20px"}
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        columns={{ base: 3, sm: 1, md: 2, lg: 3, xl: 3 }}
      >
        <Box
          _hover={{ bgColor: "red.100", cursor: "pointer" }}
          border={"1px solid red"}
          borderRadius="10px"
          padding={"20px"}
        >
          <HStack>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/time-tracking.png" />
            <Text fontSize={"2xl"}>TimeTracking</Text>
          </HStack>
          <Text fontSize="16px" fontWeight={"medium"}>
            Simple and intuative time tracking your team will love.
          </Text>
        </Box>
        <Box
          _hover={{ bgColor: "red.100", cursor: "pointer" }}
          border={"1px solid red"}
          borderRadius="10px"
          padding={"20px"}
        >
          <HStack>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/reports-and-analysis.png" />
            <Text fontSize={"2xl"}>Reports & Analysis</Text>
          </HStack>
          <Text fontSize="16px" fontWeight={"medium"}>
            Unlock the insights that help your bussiness thrive
          </Text>
        </Box>
        <Box
          _hover={{ bgColor: "red.100", cursor: "pointer" }}
          border={"1px solid red"}
          borderRadius="10px"
          padding={"20px"}
        >
          <HStack>
            <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/invoicing-and-payments.png" />
            <Text fontSize={"2xl"}>Invoicing & Payments</Text>
          </HStack>
          <Text fontSize="16px" fontWeight={"medium"}>
            Seamless invoicing and fast online payments
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
          Learn More
        </Button>
      </SimpleGrid>
      <Divider
        backgroundColor={"red"}
        orientation="horizontal"
        width={"80%"}
        margin="auto"
      />
    </Box>
  );
};

export default Features;
