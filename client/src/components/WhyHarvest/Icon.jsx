import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";

const Icon = () => {
  return (
    <Box>
      <HStack
        justifyContent={"space-around"}
        margin="50px 0px 50px 0px"
        draggable
      >
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" />
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" />
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" />
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" />
        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" />
      </HStack>
      <Box
        margin={"auto"}
        width={"100%"}
        borderBottom={"1px solid #fa5d00"}
      ></Box>
    </Box>
  );
};

export default Icon;
