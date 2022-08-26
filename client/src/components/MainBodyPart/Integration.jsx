import { Box, Button, Divider, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Integration = () => {
  return (
    <Box marginTop={"60px"} draggable>
      <SimpleGrid
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
      >
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg" />
        <Box>
          <Text color={"#fa5d00"} fontSize="2xl" fontWeight={"bold"}>
            INTEGRATIONS
          </Text>
          <Text fontSize={"4xl"}>
            Integrated with the tools your team already knows and loves
          </Text>
          <Text fontSize={"3xl"} fontWeight="100" margin={"10px 0px 10px 0px"}>
            Your favorite apps work seamlessly with Harvest so you can keep
            projects on track however you work.
          </Text>
          <Button
            margin={"auto"}
            width={{
              base: "100%",
              sm: "100%",
              md: "90%",
              lg: "50%",
              xl: "50%",
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
            Browser Integration
          </Button>
        </Box>
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

export default Integration;
