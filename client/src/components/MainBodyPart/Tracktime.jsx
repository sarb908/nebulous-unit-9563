import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tracktime = () => {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };
  return (
    <Box bgColor={"white"} draggable>
      <SimpleGrid
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        margin={"auto"}
      >
        <Box margin={"40px 0px 40px 0px"}>
          <Text fontSize={"5xl"}>Start tracking time today</Text>
          <Text fontSize={"2xl"} margin="10px 0px 10px 0px">
            Join 70,000+ companies spending their time wisely with Harvest.
          </Text>
          <HStack alignItems={"center"} justifyContent="center">
            <Button
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
              bgColor={"#fa5d00"}
              height="50px"
              fontSize="20px"
              _hover={{ bgColor: "red" }}
              marginBottom="70px"
            >
              Try Harvest Free
            </Button>
            <Text fontStyle={"italic"} fontWeight={"100"}>Free 30-day trial. No Credit Card Required</Text>
          </HStack>
        </Box>
        <Image
          margin={"auto"}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Tracktime;
