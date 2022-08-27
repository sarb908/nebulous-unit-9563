import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import style from "../MainBodyPart/customer.module.css";
const CustomerA = () => {
  return (
    <Box>
      <SimpleGrid
        gap={"30px"}
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        margin={"auto"}
        width={{
          base: "100%",
          sm: "90%",
          md: "100%",
          lg: "80%",
          xl: "80%",
        }}
        marginBottom="50px"
        marginTop={"60px"}
      >
        <Image
          margin={"40px 0px 10px 0px"}
          borderRadius={"20px 0px 20px 0px"}
          src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg"
        />
        <Box
          marginTop={{
            base: "100%",
            sm: "0%",
            md: "0%",
            lg: "25%",
            xl: "25%",
          }}
        >
          <Text fontSize={"3xl"}>
            <span className={style.span5}>"</span>
            Harvest’s easy, clean time tracking allows us to focus on the tough
            engineering problems where we bring value to our clients.
            <span className={style.span5}>"</span>
          </Text>
          <Text fontSize={"2xl"} fontWeight="bold">
            Genevieve Laing
          </Text>
          <Text fontSize={"2xl"} fontWeight="100">
            Director of Engineering, Cooper Perkins
          </Text>
        </Box>
      </SimpleGrid>
      <Box margin={"auto"} borderTop={"1px solid #fa5d00"} width={"80%"}></Box>
    </Box>
  );
};

export default CustomerA;
