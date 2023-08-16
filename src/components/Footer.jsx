import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box as="footer" px="8">
      <Flex flexDir={"column"} mb="8" alignItems={"center"}>
        <Img
          w="clamp(10rem, 40%, 20rem)"
          src="/imgs/sendit.jpg"
          alt="sendit-img"
        />
        <Flex gap={"4"} justifyContent={"center"} alignItems={"center"}>
          <Link href="" w="40%">
            <Img src="/imgs/tel.jpg" alt="telegram img" />
          </Link>
          <Link href="" w="40%">
            <Img src="/imgs/twir.jpg" alt="twitter img" />
          </Link>
        </Flex>
      </Flex>
      <Text opacity={".5"} textAlign={"center"}>
        &copy;2023 copywright $SENDIT
      </Text>
    </Box>
  );
}
