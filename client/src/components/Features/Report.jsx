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
    <Box marginTop={"60px"} name="report">
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
            Reports & analysis
          </Text>
          <Text
            margin={"10px 0px 10px 0px"}
            fontSize="20px"
            fontFamily={"sans-serif"}
          >
            A wide selection of visual reports keep projects running smoothly
            and your team supported.
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
            src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=1181&name=screenshot-features-projects.png"
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
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg" />
            <Text fontSize={"2xl"}>Keep budgets on target</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Harvest updates budgets as your team tracks time, so you can keep
            your projects on track and profitable.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg" />
            <Text fontSize={"2xl"}>Visualize team capacity</Text>
          </HStack>
          <Text fontSize={"22px"}>
            See who’s overworked and who’s under-utilized at a glance with
            capacity reporting.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg" />
            <Text fontSize={"2xl"}>Understand costs</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Keep track of internal costs and review past project data to inform
            future project scope and estimates.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg" />
            <Text fontSize={"2xl"}>Analyze time spent</Text>
          </HStack>
          <Text fontSize={"22px"}>
            See which projects and tasks are consuming your team’s time and
            impacting costs.
          </Text>
        </VStack>
        <VStack>
          <HStack align={"fl"} justifyContent="flex-start">
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg" />
            <Text fontSize={"2xl"}>Dive into the details</Text>
          </HStack>
          <Text fontSize={"22px"}>
            Powerful filters give you the detailed data needed to understand
            where your time goes and plan what’s next.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg" />
            <Text fontSize={"2xl"}>Do more with your data</Text>
          </HStack>
          <Text fontSize={"22px"}>
            It’s easy to export data from Harvest into the reporting tools you
            already use to gain additional insights.
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
