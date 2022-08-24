import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Links = [
  <AiOutlineHome />,
  "Time",
  "Expenses",
  "Projects",
  "Team",
  "Reports",
  "Invoices",
  "Manage",
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const goto = (link) => {
    navigate(link);
  };
  return (
    <>
      <Box bg={useColorModeValue("#fa5d00", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={"#fa5d00"}
            color="white"
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>{""}</Box>
            <Box></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => {
                return <NavLink key={link}>{link}</NavLink>;
              })} */}
              <Tabs variant={"enclosed"}>
                <TabList>
                  <Tab onClick={() => goto("")}>{Links[0]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[1]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[2]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[3]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[4]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[5]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[6]}</Tab>
                  <Tab onClick={() => goto("")}>{Links[7]}</Tab>
                </TabList>
              </Tabs>
            </HStack>
          </HStack>
          <HStack>
            <Text onClick={() => goto("")}>Setting</Text>
            <Box>
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </Box>
            <Text color={"white"} fontWeight="bold">
              Harish
            </Text>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <RouterLink to="">
                <Text color={"white"}>{Links[0]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[1]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[2]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[3]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[4]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[5]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[6]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[7]}</Text>
              </RouterLink>
              <RouterLink to={""}>
                <Text color={"white"}>{Links[8]}</Text>
              </RouterLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
