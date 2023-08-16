import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

export default function HowToJoin() {
  return (
    <Box my="8" px={["8", "12", "16", "24"]} as="section" id="howtojoin">
      <Flex flexDir={"column"} mb="10" gap="1" textAlign={"right"}>
        <Heading as="h2" fontSize={"clamp(1.3rem, 4vw, 3rem)"}>
          How To Join
        </Heading>
        <Heading as="h3" fontSize="clamp(1rem, 2.5vw, 2.5rem)">
          The Blockchain Revolution with Us
        </Heading>
        <Text color={"whiteAlpha.500"}>
          JOIN AND EXPERIENCE THE FUTURE OF CRYPTO CURRENCY WITH $SENDIT
        </Text>
      </Flex>
      <Flex mb={{ base: "4", md: "16" }} flexDir={"column"}>
        <Box
          mb="6"
          display={{ base: "none", md: "block" }}
          w="20rem"
          h="2rem"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%);"
        />
        <Box
          ml={{ base: "0", md: "clamp(5rem, 7%, 7rem)" }}
          py="2"
          px="4"
          transform={"translateX(-1rem)"}
          maxW={{ md: "60%" }}
          bg={{
            base:
              "linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)",
            md: "none",
          }}
        >
          <Heading as="h4" fontSize="clamp(.8rem, 2vw, 2rem)" mb="2">
            Purchase $SENDIT Coin
          </Heading>
          <Text>
            Elevate your luck with our astonishing ETH rewards that come from
            holding our coin! ($SENDIT).
          </Text>
        </Box>
      </Flex>
      <Flex
        ml={{ base: "0", md: "clamp(7rem, 15%, 15rem)" }}
        mb={{ base: "4", md: "16" }}
        flexDir={"column"}
        transform={{ base: "translateX(-1rem)", md: "none" }}
      >
        <Box
          mb="6"
          display={{ base: "none", md: "block" }}
          w="20rem"
          h="2rem"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%);"
        />
        <Box
          ml={{ base: "clamp(5rem, 10%, 7rem)", md: "clamp(5rem, 7%, 7rem)" }}
          p="2"
          maxW={{ md: "60%" }}
          bg={{
            base:
              "linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)",
            md: "none",
          }}
        >
          <Heading as="h4" fontSize="clamp(.8rem, 2vw, 2rem)" mb="2">
            Earn Airdrop Every 5 Days
          </Heading>
          <Text>
            Unwrap the thrill of winning like never before - our crypto coin is
            your golden ticket to a world of excitement.
          </Text>
        </Box>
      </Flex>
      <Flex
        ml={{ base: "0", md: "clamp(20rem, 30%, 30rem)" }}
        mb={{ base: "2", md: "12" }}
        flexDir={"column"}
        transform={{ base: "translateX(-1rem)", md: "none" }}
      >
        <Box
          mb="6"
          display={{ base: "none", md: "block" }}
          w="20rem"
          h="2rem"
          bg="linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%);"
        />
        <Box
          ml={{md: "clamp(5rem, 7%, 7rem)" }}
          p="2"
          bg={{
            base:
              "linear-gradient(94.83deg, rgba(162, 255, 69, 0.5) -0.62%, rgba(217, 217, 217, 0) 53.89%)",
            md: "none",
          }}
        >
          <Heading as="h4" fontSize="clamp(.8rem, 2vw, 2rem)" mb="2">
            Brace Your Self For Jaw - dropping Surprises
          </Heading>
          <Text>
            Don’t just dream about the price; make it yours in a heartbeat! Join
            us and let the gifting galore begin, with $SENDIT.
          </Text>
        </Box>
      </Flex>
      <Flex w="100%" mt="4" justifyContent={"center"}>
        <Button text={"BUY $SENDIT"} type={"primary"} />
      </Flex>
    </Box>
  );
}