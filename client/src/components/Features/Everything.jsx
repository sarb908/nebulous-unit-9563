import React from "react";
import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Everything = () => {
  return (
    <Box bgColor="#fff8f1" border="1px solid #fff8f1" draggable>
      <Box marginTop={"100px"}>
        <SimpleGrid
          width={{ base: "100%", sm: "90%", md: "90%", lg: "100%", xl: "100%" }}
        >
          <Text
            margin={"auto"}
            width={{
              base: "100%",
              sm: "90%",
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
            Everything your team needs to keep ticking
          </Text>
          <Text
            margin={"auto"}
            width={{
              base: "100%",
              sm: "90%",
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
            Intuitive time tracking and powerful insights that help your team
            thrive.
          </Text>
        </SimpleGrid>
        <SimpleGrid
          gap={"30px"}
          margin={"auto"}
          marginTop="50px"
          marginBottom={"50px"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
          columns={{ base: 3, sm: 1, md: 1, lg: 2, xl: 3 }}
        >
          <Link to="timetracking" smooth duration={1000}>
            <HStack
              justifyContent={"space-between"}
              padding={"20px"}
              borderRadius="15px"
              border={"1px solid #fa5d00"}
              _hover={{ cursor: "pointer", bgColor: "red.100" }}
            >
              <HStack>
                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" />
                <Text fontSize={"2xl"}>Time tracking</Text>
              </HStack>
              <ArrowDownIcon w={6} h={6} />
            </HStack>
          </Link>
          <Link to="report" smooth duration={1000}>
            <HStack
              justifyContent={"space-between"}
              padding={"20px"}
              borderRadius="15px"
              border={"1px solid #fa5d00"}
              _hover={{ cursor: "pointer", bgColor: "red.100" }}
            >
              <HStack>
                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" />
                <Text fontSize={"2xl"}>Reports & analysis</Text>
              </HStack>
              <ArrowDownIcon w={6} h={6} />
            </HStack>
          </Link>
          <Link to="invoice" smooth duration={1000}>
            <HStack
              justifyContent={"space-between"}
              padding={"20px"}
              borderRadius="15px"
              border={"1px solid #fa5d00"}
              _hover={{ cursor: "pointer", bgColor: "red.100" }}
            >
              <HStack>
                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg" />
                <Text fontSize={"2xl"}>Invoicing & payments</Text>
              </HStack>
              <ArrowDownIcon w={6} h={6} />
            </HStack>
          </Link>
        </SimpleGrid>
      </Box>
      <Box borderTop={"1px solid red"} width="100%"></Box>
    </Box>
  );
};

export default Everything;
