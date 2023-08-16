import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

export default function HowToJoin() {
  return (
    <Box my="8" px="6">
      <Flex flexDir={"column"} mb="10" gap="1" textAlign={"right"}>
        <Heading as="h2" fontSize={"1.3rem"}>
          How To Join
        </Heading>
        <Heading as="h3" fontSize={"1rem"}>
          The Blockchain Revolution with Us
        </Heading>
        <Text color={"whiteAlpha.500"}>
          JOIN AND EXPERIENCE THE FUTURE OF CRYPTO CURRENCY WITH $SENDIT
        </Text>
      </Flex>
      <Flex alignItems={"top"} gap="2" justifyContent={"space-between"}>
        <Box
          p="2"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)"
        >
          <Heading as="h4" fontSize={".8rem"} mb="2">
            Purchase $SENDIT Coin
          </Heading>
          <Text>
            Elevate your luck with our astonishing ETH rewards that come from
            holding our coin! ($SENDIT).
          </Text>
        </Box>
        <Box w="10rem">
          <Button text={"Learn More"} />
        </Box>
      </Flex>
      <Flex ml="25%">
        <Box
          p="2"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)"
        >
          <Heading as="h4" fontSize={".8rem"} mb="2">
            Earn Airdrop Every 5 Days
          </Heading>
          <Text>
            Unwrap the thrill of winning like never before - our crypto coin is
            your golden ticket to a world of excitement.
          </Text>
        </Box>
      </Flex>
      <Flex alignItems={"end"} gap="8" justifyContent={"space-between"}>
        <Box w="100%">
          <Button text={"BUY $SENDIT"} type={"primary"} />
        </Box>
        <Box
          p="2"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)"
        >
          <Heading as="h4" fontSize={".8rem"} mb="2">
            Brace Your Self For Jaw - dropping Surprises
          </Heading>
          <Text>
            Don’t just dream about the price; make it yours in a heartbeat! Join
            us and let the gifting galore begin, with $SENDIT.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
