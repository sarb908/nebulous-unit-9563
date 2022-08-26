import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TimeTracking = () => {
  return (
    <Box name="timetracking" marginTop={"60px"}>
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
            Time tracking{" "}
          </Text>
          <Text
            margin={"10px 0px 10px 0px"}
            fontSize="20px"
            fontFamily={"sans-serif"}
          >
            An intuitive, lightweight time tracking experience that’s easy to
            adopt and use every day.
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
            src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=1181&name=screenshot-features-timesheets.png"
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
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg" />
            <Text fontSize={"2xl"}>
              Track time from browser, desktop, and mobile
            </Text>
          </HStack>
          <Text fontSize={"22px"}>
            Make it as easy as possible for your team to capture their time with
            dedicated apps across devices.
          </Text>
        </VStack>
        <VStack>
          <HStack align={"fl"} justifyContent="flex-start">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg" />
            <Text fontSize={"2xl"}>Integrated with your workflow</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Harvest integrates with the tools your team knows and loves —
            capture time the way your team already works.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg" />
            <Text fontSize={"2xl"}>
              Custom reminders for consistent time tracking
            </Text>
          </HStack>
          <Text fontSize={"22px"}>
            Create automated reminders to help your team track time regularly
            and accurately.
          </Text>
        </VStack>
      </SimpleGrid>
      <Box
        margin={"auto"}
        borderTop={"1px solid red"}
        width="80%"
        marginTop={"60px"}
      ></Box>
    </Box>
  );
};

export default TimeTracking;
