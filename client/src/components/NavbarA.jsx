import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
const Links = [
  "Why Harvest?",
  "Features",
  "Customers",
  "Integrations",
  "Price",
];

export default function Simple() {
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        color={{ base: "#fa5d00" }}
        bgColor={{
          base: "#fff8f1",
          sm: "#fff8f1",
          md: "#fff8f1",
          lg: "#fff8f1",
          xl: "#fff8f1",
        }}
        bg={useColorModeValue("#fff8f1", "gray.900")}
        px={4}
        position={"fixed"}
        width="100%"
        padding={"10px"}
        draggable
      >
        <Flex
          className="media"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box className="text" cursor={"pointer"}>
              <Text onClick={() => goto("/")} color={"#fa5d00"} fontSize="5xl">
                Harvest
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Tabs variant={"enclosed"}>
                <TabList>
                  <Tab fontSize={"2xl"} onClick={() => goto("/whyharvest")}>
                    {Links[0]}
                  </Tab>
                  <Tab fontSize={"2xl"} onClick={() => goto("/feature")}>
                    {Links[1]}
                  </Tab>
                  <Tab fontSize={"2xl"} onClick={() => goto("")}>
                    {Links[2]}
                  </Tab>
                  <Tab fontSize={"2xl"} onClick={() => goto("")}>
                    {Links[3]}
                  </Tab>
                  <Tab fontSize={"2xl"} onClick={() => goto("/price")}>
                    {Links[4]}
                  </Tab>
                </TabList>
              </Tabs>
            </HStack>
          </HStack>
          <HStack>
            <Link fontSize={"2xl"}>Signup</Link>
            <Button
              width={{
                base: "200px",
                sm: "150px",
                md: "150px",
                lg: "200px",
                xl: "200px",
              }}
              color={"white"}
              borderRadius={"15"}
              size={"md"}
              _hover={{ background: "red" }}
              bg={"#fa5d00"}
            >
              Try Harvest Free
            </Button>
          </HStack>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}

              <RouterLink to="/whyharvest">{Links[0]}</RouterLink>
              <RouterLink to={"/feature"}>{Links[1]}</RouterLink>
              <RouterLink to={""}>{Links[2]}</RouterLink>
              <RouterLink to={""}>{Links[3]}</RouterLink>
              <RouterLink to={"/price"}>{Links[4]}</RouterLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
