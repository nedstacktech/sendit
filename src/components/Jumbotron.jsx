import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

function Jumbotron() {
  return (
    <Flex px="6" flexDir={"column"} alignItems={"center"}>
      <Box>
        <Heading
          as="h1"
          fontSize={"1.2rem"}
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          <Text as="p">coin-based</Text>
          <Text as="p">$sendit launch</Text>
        </Heading>
        <Text textAlign={"center"} opacity={".5"}>Are you ready to launch your offering?</Text>
      </Box>
      <Box w="clamp(6.25rem, 50%, 25rem)">
        <Img src="/imgs/sendit.jpg" w="100%" />
      </Box>
      <Flex gap={"4"} mt="4">
        <Button text={"BUY $SENDIT"} type="primary" />
        <Button text={"Learn More"} />
      </Flex>
    </Flex>
  );
}

export default Jumbotron;
