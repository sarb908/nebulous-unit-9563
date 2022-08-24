import { Box, Button, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Text, HStack } from "@chakra-ui/react";
import { ImStarHalf } from "react-icons/im";
import "./about.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };
  return (
    <>
      <Box bgColor="#fff8f1" border="1px solid #fff8f1" draggable>
        <HStack
          margin={"20px 0px 20px 0px"}
          alignItems="center"
          justifyContent="center"
          marginTop={"100px"}
        >
          <StarIcon color={"#fa5d00 "} />
          <StarIcon color={"#fa5d00 "} />
          <StarIcon color={"#fa5d00 "} />
          <StarIcon color={"#fa5d00 "} />
          <ImStarHalf color={"#fa5d00 "} />
          <Text textAlign="center">
            4.6 <span>(491 reviews)</span>
          </Text>
        </HStack>
        <SimpleGrid
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "30%", lg: "30%", xl: "60%" }}
        >
          <Text
            className="about"
            fontSize="4xl"
            fontFamily={"mono"}
            textAlign="center"
            draggable
          >
            Finally, time tracking that your team actually wants to use.
          </Text>
        </SimpleGrid>
        <Text
          padding={"10px"}
          textAlign={"center"}
          color={"#6D6E6D"}
          fontSize="18px"
          fontFamily={"-moz-initial"}
        >
          Intuitive time tracking. Instant report generation. Automatic invoice
          creation.
        </Text>
        <SimpleGrid
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "30%", lg: "30%", xl: "20%" }}
        >
          <Button
            onClick={() => goto("")}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"#fa5d00"}
            fontSize="20px"
            _hover={{ bgColor: "red" }}
          >
            Try Harvest Free
          </Button>
        </SimpleGrid>
        <Text textAlign={"center"} marginTop="10px" marginBottom={"10px"}>
          Free 30-day trial. No credit card required.
        </Text>
        <Image
          width={"90%"}
          margin="auto"
          src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/Hero_Image_2x.jpg"
        />
        <HStack width={"90%"} margin="auto">
          <Text fontSize={"18"} color="gray" fontFamily={"sans-serif"}>
            <span className="span">70,000+ </span>companies track time with
            Harvest
          </Text>
          <Divider
            backgroundColor={"red"}
            orientation="horizontal"
            width={"70%"}
          />
        </HStack>
        <HStack justifyContent={"space-around"} marginTop="30px" draggable>
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" />
          <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" />
        </HStack>
        <Divider
          marginTop={"30px"}
          backgroundColor={"red"}
          orientation="horizontal"
          width={"100%"}
        />
      </Box>
    </>
  );
};

export default Home;
