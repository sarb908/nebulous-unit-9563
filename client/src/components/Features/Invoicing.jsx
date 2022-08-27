import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
const Invoicing = () => {
  return (
    <Box marginTop={"60px"} name="invoice">
      <SimpleGrid
        margin={"auto"}
        columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        textAlign={"left"}
      >
        <Box
          marginTop={{ base: "100%", sm: "0", md: "0", lg: "20%", xl: "20%" }}
        >
          <Text color={"#fa5d00"} fontSize="6xl">
            Invoicing & payments
          </Text>
          <Text
            margin={"10px 0px 10px 0px"}
            fontSize="20px"
            fontFamily={"sans-serif"}
          >
            Turn your team’s tracked time and expenses into invoices and collect
            payment quickly with integrated online payments.
          </Text>
          <Button
            margin={"auto"}
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "50%",
            }}
            marginTop={"30px"}
            borderRadius={"18px"}
            color={"white"}
            bgColor={"#fa5d00"}
            height="50px"
            fontSize="20px"
            _hover={{ bgColor: "red" }}
          >
            Start Your Free Trial
          </Button>
        </Box>
        <Box>
          <Image
            marginTop={"50px"}
            src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-invoices-1.png?width=1181&name=screenshot-features-invoices-1.png"
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        gap={"40px"}
        margin={"auto"}
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        columns={{ base: 3, sm: 1, md: 1, lg: 2, xl: 3 }}
        marginTop="50px"
      >
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg" />
            <Text fontSize={"2xl"}>Streamline your invoicing</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Easily create and send accurate invoices using your team’s time and
            expenses already tracked in Harvest.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg" />
            <Text fontSize={"2xl"}>Get paid fast with online payments</Text>
          </HStack>
          <Text fontSize={"22px"}>
            PayPal and Stripe integrations let your clients quickly and
            conveniently pay invoices online.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg" />
            <Text fontSize={"2xl"}>Keep your books up to date</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Automatically copy your Harvest invoices and payments to QuickBooks
            Online or Xero for simplified accounting.
          </Text>
        </VStack>
      </SimpleGrid>
      <Box
        margin={"auto"}
        borderTop={"1px solid red"}
        width="100%"
        marginTop={"60px"}
      ></Box>
    </Box>
  );
};

export default Invoicing;
