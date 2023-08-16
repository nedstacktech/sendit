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
    <Box px={["6", "12", "16", "24"]}>
      <Flex
        flexDir={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems={["center"]}
      >
        <Box>
          <Heading
            as="h1"
            fontSize={["1.2rem", "2rem", "3rem", "4rem"]}
            textAlign={["center", "left"]}
            textTransform={"uppercase"}
          >
            <Text as="p">coin-based</Text>
            <Text as="p">$sendit launch</Text>
          </Heading>
          <Text textAlign={["center", "left"]} opacity={".5"}>
            Are you ready to launch your offering?
          </Text>
        </Box>
        <Box w="clamp(6.25rem, 30%, 25rem)">
          <Img src="/imgs/sendit.jpg" w="100%" />
        </Box>
      </Flex>
      <Flex gap={["4", "12"]} mt="4" justifyContent={["center", "flex-start"]}>
        <Button text={"BUY $SENDIT"} type="primary" />
        <Button text={"Learn More"} />
      </Flex>
    </Box>
  );
}

export default Jumbotron;
