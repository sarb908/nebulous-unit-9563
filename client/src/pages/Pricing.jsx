import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";
import Icon from "../components/WhyHarvest/Icon";
import style from "../components/MainBodyPart/customer.module.css";
import Tracktime from "../components/MainBodyPart/Tracktime";
import Footer from "../components/Footer";
const Pricing = () => {
  const [state, setState] = useState(0);
  const [price, setPrice] = useState(12);
  const handleSet = () => {
    if (state == 0) {
      setPrice(10.8);
      setState(1);
    } else {
      setPrice(12);
      setState(0);
    }
  };
  return (
    <Box bgColor="#fff8f1" border="1px solid #fff8f1" draggable>
      <Box marginTop={"100px"}>
        <SimpleGrid
          width={{ base: "100%", sm: "90%", md: "90%", lg: "100%", xl: "100%" }}
        >
          <Text
            margin={"auto"}
            width={{
              base: "100%",
              sm: "90%",
              md: "100%",
              lg: "60%",
              xl: "80%",
            }}
            fontSize="5xl"
            fontFamily={" sans-serif"}
            textAlign={"left"}
          >
            Simple, flexible pricing
          </Text>
          <Text
            margin="auto"
            textAlign={"left"}
            marginTop={"10px "}
            marginBottom="10px"
            fontSize={"3xl"}
            width={{
              base: "100%",
              sm: "90%",
              md: "100%",
              lg: "60%",
              xl: "80%",
            }}
          >
            Every plan includes every feature, and can scale as your team does.
          </Text>
        </SimpleGrid>
        <SimpleGrid
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        >
          <HStack margin={"20px 0px 20px 0px"}>
            <Text>Pay Monthly</Text>
            <Switch onChange={handleSet} size={"lg"} colorScheme="red" />
            <Text>Pay Yearly (Save 10%)</Text>
          </HStack>
        </SimpleGrid>
        <SimpleGrid
          fontFamily={"sans-serif"}
          gap={"30px"}
          margin={"auto"}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        >
          <Box
            borderRadius={"30px 0px 30px 0px"}
            padding={"40px"}
            border={"1px solid #fa5d00"}
            display={"flex"}
            background="linear-gradient(to right,  #87ffc5 0%,yellow 100%)"
          >
            <VStack>
              <Text fontSize="4xl" color={"#fa5d00"}>
                Free
              </Text>
              <Text>1 Seat</Text>
              <Text>2 Seat</Text>
            </VStack>
            <Box
              border={
                "1px solid linear-gradient(to right,  #87ffc5 0%,#fff8f1 100%)"
              }
              width="70%"
            ></Box>
            <VStack align={"flex-end"}>
              <Text fontFamily={"moutoweb"} display={"flex"} fontSize="5xl">
                <BsCurrencyDollar />
                {0}
              </Text>
              <Text>forever</Text>
            </VStack>
          </Box>
          <Box
            borderRadius={"30px 0px 30px 0px"}
            padding={"40px"}
            border={"1px solid #fa5d00"}
            display={"flex"}
            background=" linear-gradient(to right,  yellow 0%,#87ffc5 100%)"
          >
            <VStack>
              <Text fontSize="4xl" color={"#fa5d00"}>
                Pro
              </Text>
              <Text>Unlimited seats</Text>
              <Text>Unlimited projects</Text>
            </VStack>
            <Box
              border={
                "1px solid linear-gradient(to right,  #fff8f1 0%,#87ffc5 100%)"
              }
              width="40%"
            ></Box>
            <VStack textAlign={"right"} align={"flex-end"}>
              <Text fontFamily={"moutoweb"} display={"flex"} fontSize="5xl">
                <BsCurrencyDollar />
                {price}
              </Text>
              <Text>per seat per month</Text>
            </VStack>
          </Box>
        </SimpleGrid>
        <Text
          fontStyle={"italic"}
          paddingTop="20px"
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
        >
          All Price In USD
        </Text>
        <SimpleGrid columns={{ base: 2, sm: 1 }} margin="auto">
          <Button
            margin={"auto"}
            width={{
              base: "100%",
              sm: "90%",
              md: "90%",
              lg: "20%",
              xl: "20%",
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
          <Text
            margin={"auto"}
            marginBottom="10px"
            marginTop="10px"
            fontStyle={"italic"}
          >
            Fully functional 30-day trial. No credit card required.
          </Text>
        </SimpleGrid>
        <Box borderTop={"1px solid #fa5d00"} margin="auto" width={"87%"}></Box>
        <Icon />
        <SimpleGrid
          width={{
            base: "100%",
            sm: "90%",
            md: "100%",
            lg: "60%",
            xl: "80%",
          }}
          margin={"auto"}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
          marginTop="50px"
          marginBottom={"50px"}
        >
          <Box>
            <Text
              margin={"auto"}
              width={{
                base: "100%",
                sm: "90%",
                md: "100%",
                lg: "80%",
                xl: "80%",
              }}
              fontSize="4xl"
              fontFamily={"sans-serif"}
              textAlign={"left"}
              marginBottom="20px"
            >
              Every feature your team needs
            </Text>
          </Box>
          <Box>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Easy time and expense tracking
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Apps for all your devices
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Integrations that fit your workflow
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Insight into your projects and team
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Seamless invoicing and payments
            </Text>
            <Text fontSize={"20px"}>
              <CheckIcon w={8} h="5" color={"#fa5d00"} />
              Support from real humans
            </Text>
          </Box>
        </SimpleGrid>
        <Box borderTop={"1px solid #fa5d00"} margin="auto" width={"87%"}></Box>
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
        >
          <Image
            margin={"40px 0px 10px 0px"}
            borderRadius={"20px 0px 20px 0px"}
            src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=1680&name=home-photo-dovetail.jpg"
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
            <Text fontSize={"2xl"}>
              <span className={style.span5}>"</span>
              We needed something that worked, something super simple, because
              we don’t want to have to teach people how to use it as part of
              onboarding.
              <span className={style.span5}>"</span>
            </Text>
            <Text fontSize={"2xl"} fontWeight="bold">
              Nick Frandsen
            </Text>
            <Text fontSize={"2xl"} fontWeight="100">
              Co-founder and managing partner, Dovetails
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          margin={"auto"}
          width={{ base: "100%", sm: "90%", md: "90%", lg: "80%", xl: "80%" }}
          columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}
        >
          <Box>
            <Text
              margin={"auto"}
              width={{
                base: "100%",
                sm: "90%",
                md: "100%",
                lg: "80%",
                xl: "80%",
              }}
              fontSize="4xl"
              fontFamily={"sans-serif"}
              textAlign={"left"}
              marginBottom="20px"
            >
              Frequently asked questions
            </Text>
          </Box>
          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      How do I sign up for the free plan?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  When your trial account meets the free plan’s requirements,
                  you can sign up for the free version during the upgrade
                  process. On the Upgrade Your Harvest Plan page, click the
                  switch to the free version link below the plan options.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      What happens at the end of my trial?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  You can upgrade to a paid plan any time during your 30-day
                  trial period. If you haven’t upgraded at the end of 30 days,
                  your trial account will be automatically deactivated. We don’t
                  collect credit card info when you start a trial, so you don’t
                  need to worry about being charged. Even though your trial
                  account will be deactivated, we won’t delete your data. If you
                  ever want to try Harvest again in the future, your data will
                  be waiting for you. If you’re looking to switch to the free
                  plan, you can do that any time during your trial as well.
                  You’ll see that option during the upgrade process as long as
                  your account meets the free plan’s requirements.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      Does my team qualify for any discounts?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  Yes! When you pay for the year up front, you get a 10%
                  discount that’s automatically applied to your account. We also
                  offer discounts upon request to teams of 50+ people,
                  nonprofits, schools and universities, educators using Harvest
                  in a classroom setting, and students.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      How can I get a quote for my team?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  Use our handy pricing calculator to see how much your team
                  would pay for Harvest and what discounts could apply.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      What are our payment options?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  You can pay for Harvest via credit card either monthly or
                  yearly. If you pay for the year in advance, you’ll get a 10%
                  discount on your bill! If you have 10 or more seats and pay
                  for the year in advance, you can also request an invoice when
                  you upgrade and pay for your subscription via check or bank
                  transfer.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      What happens if my team size changes?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  If you’re paying monthly, you can add or remove seats at any
                  time. Your price will be adjusted on your next monthly bill.
                  If you have contractors or interns, or you anticipate the
                  number of seats you’ll need may fluctuate from month to month,
                  the monthly option is a better fit for you. If you paid for
                  the year in advance, you can add seats at any time and will be
                  charged a prorated amount based on the number of days left in
                  your billing cycle. While you can’t remove seats during your
                  current billing cycle, you can indicate inside your account if
                  you’d like your yearly plan to renew with fewer seats. Keep in
                  mind that yearly accounts receive a 10% discount, so if your
                  seat requirements don’t change from month to month, yearly is
                  probably the best option for you.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem padding={"10px"} _hover={{ bgColor: "red.100" }}>
                <h2>
                  <AccordionButton>
                    <Box fontSize={"2xl"} flex="1" textAlign="left">
                      Can we switch our billing frequency?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"20px"} pb={4}>
                  If you’re paying monthly, you can switch to yearly payment at
                  any time (and you’ll receive a 10% discount for doing so!). If
                  you paid for the year in advance, you can switch to monthly
                  payment at the end of your current yearly billing cycle, but
                  keep in mind that the 10% discount will be removed. To make
                  the change, reach out to our support team during the month
                  before your renewal.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </SimpleGrid>
        <Box borderTop={"1px solid #fa5d00"} width={"100%"}></Box>
        <Tracktime />
        <Footer />
      </Box>
    </Box>
  );
};

export default Pricing;
