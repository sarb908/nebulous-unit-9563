import {
  Box,
  Button,
  Divider,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./customer.module.css";
import { useNavigate } from "react-router-dom";
const Customer = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <SimpleGrid
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
      >
        <Text
          marginTop={"40px"}
          Text
          color={"#fa5d00"}
          fontSize="2xl"
          fontWeight={"bold"}
        >
          CUSTOMER STORIES
        </Text>
        <Text fontSize={"5xl"}>Helping teams thrive since 2006</Text>
        <Text fontSize={"3xl"} fontWeight="100" margin={"10px 0px 10px 0px"}>
          Teams of all sizes, types, and industries trust Harvest to track their
          time.
        </Text>
      </SimpleGrid>

      <SimpleGrid
        margin={"auto"}
        gap={"20px"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        columns={{ base: 4, sm: 1, md: 2, lg: 2, xl: 4 }}
      >
        <Box
          border={"1px solid red"}
          padding="10px"
          _hover={{
            cursor: "pointer",
            border: "0",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
          borderRadius="20px 0px 20px 0px"
        >
          <Image
            borderRadius="20px 0px 20px 0px"
            src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=840&height=561&name=home-photo-zehner.jpg"
          />
          <Text textAlign={"center"} fontSize={"20px"}>
            <span className={style.span4}>"</span>
            We really focus on work-life balance in remote work… Time tracking
            reveals if somebody is overburdened and that becomes an immediate
            conversation.
            <span className={style.span4}>"</span>
          </Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight="bold">
            Noah Gedrich, Zehner
          </Text>
        </Box>
        <Box
          border={"1px solid red"}
          padding="10px"
          _hover={{
            cursor: "pointer",
            border: "0",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
          borderRadius="20px 0px 20px 0px"
        >
          <Image
            borderRadius="20px 0px 20px 0px"
            src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=840&height=561&name=home-photo-dovetail.jpg"
          />
          <Text textAlign={"center"} fontSize={"20px"}>
            <span className={style.span4}>"</span>
            We needed something that worked, something super simple, because we
            don’t want to have to teach people how to use it as part of
            onboarding.<span className={style.span4}>"</span>
          </Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight="bold">
            Nick Frandsen, Dovetail
          </Text>
        </Box>
        <Box
          border={"1px solid red"}
          padding="10px"
          _hover={{
            cursor: "pointer",
            border: "0",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
          borderRadius="20px 0px 20px 0px"
        >
          <Image
            borderRadius="20px 0px 20px 0px"
            src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-cooper.jpg?width=840&height=561&name=home-photo-cooper.jpg"
          />
          <Text textAlign={"center"} fontSize={"20px"}>
            <span className={style.span4}>"</span>
            Having an easy, clean way to track time allows us to focus on the
            tough engineering problems where we bring value to our clients.
            <span className={style.span4}>"</span>
          </Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight="bold">
            Genevieve Laing, Cooper Perkins
          </Text>
        </Box>
        <Box
          border={"1px solid red"}
          padding="10px"
          _hover={{
            cursor: "pointer",
            border: "0",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
          borderRadius="20px 0px 20px 0px"
        >
          <Image
            borderRadius="20px 0px 20px 0px"
            src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-luminary.jpg?width=840&height=561&name=home-photo-luminary.jpg"
          />
          <Text textAlign={"center"} fontSize={"20px"}>
            <span className={style.span4}>"</span>
            Harvest was key to helping me start my company – it allowed us to
            move from managing a lot of subcontractors to managing a staff quite
            easily.<span className={style.span4}>"</span>
          </Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight="bold">
            Sara Holoubek, Luminary Labs
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
          onClick={() => navigate("/customer")}
          fontSize="20px"
          _hover={{ bgColor: "red" }}
          marginBottom="70px"
        >
          Meet Our Customers
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

export default Customer;

// box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
