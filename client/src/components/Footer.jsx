import { ReactNode } from "react";

import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };

  return (
    <Box
      bg={useColorModeValue("black", "black")}
      color={useColorModeValue("white", "white")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text fontSize={"6xl"}>Harvest</Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Home</ListHeader>
            <Link onClick={() => goto("")}>Why Harvest?</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Integrations</Link>
            <Link href={"#"}>Apps</Link>
            <Link href={"#"}>Security</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Link href={"#"}>Customer stories</Link>
            <Link href={"#"}>Resources</Link>
            <Link href={"#"}>Webinars</Link>
            <Link href={"#"}>Help & support</Link>
            <Link href={"#"}>Integrate with Harvest</Link>
            <Link href={"#"}>Time Well Spent</Link>
            <Link href={"#"}>Time in This Time</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <SimpleGrid
        width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        margin="auto"
      >
        <Button
          height={{
            base: "300px",
            sm: "60px",
            md: "70px",
            lg: "50px",
            xl: "50px",
          }}
          border={"1px solid white"}
          marginTop={"30px"}
          borderRadius={"18px"}
          color={"white"}
          bgColor={"black"}
          _hover={{ bgColor: "blue.100", color: "black" }}
          marginBottom="70px"
          textAlign={"center"}
          overflow="hidden"
          //   textOverflow={"ellipsis"}
        >
          We also make: Harvest Forecast – the fast and simple way to schedule
          your team across projects.
        </Button>
      </SimpleGrid>

      <SimpleGrid
        width={"80%"}
        margin={"auto"}
        columns={{ base: 4, sm: 1, md: 1, lg: 4, xl: 4 }}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <Box>
          <HStack _hover={{ cursor: "pointer" }}>
            <Link target={"_blank"} href="https://twitter.com/harvest">
              <AiOutlineTwitter size="2em" />
            </Link>
            <Text>Twitter</Text>
            <Link
              href="https://www.linkedin.com/company/harvest_2/"
              target={"_blank"}
            >
              <GrLinkedin size="2em" />
            </Link>
            <Text>Linkedin</Text>
            <Link href="https://www.instagram.com/harvest/" target={"_blank"}>
              <FaInstagram size="2em" />
            </Link>
            <Text>Instagram</Text>
          </HStack>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box>
          <Text fontSize={"2xl"}>© 2006-2022 Harvest</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
