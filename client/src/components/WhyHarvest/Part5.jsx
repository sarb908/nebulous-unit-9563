import React from "react";
import { Box, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const Part5 = () => {
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
              Trusted by thousands of teams worldwide
            </Text>
            <Text fontSize="23px" margin="20px 0px 20px 0px">
              We’ve been serving teams of all sizes, across all types of
              industries for over 15 years. Today, with more than 70,000
              customers, you can be sure that Harvest will work for your team’s
              unique needs.
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Flexible timekeeping and invoicing, whether you bill by time or by
              project
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Scalable one-product-fits-all approach, that can grow with your
              team
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Used by companies of all types, from creative agencies to
              management consulting
            </Text>
          </Box>
          <Box margin="40px 0px 40px 0px">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg" />
            <Text
              marginTop="20px"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
              fontStyle="italic"
            >
              "Harvest gives us feedback on how we’re doing so we can be
              competitive, make a profit, and keep ourselves afloat."
            </Text>
            <Text
              fontStyle="italic"
              fontFamily={"sans-serif"}
              color="gray"
              textAlign={"center"}
            >
              John Wall, Public
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
export default Part5;
