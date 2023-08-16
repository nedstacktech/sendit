import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box as="footer" px="8">
      <Flex flexDir={"column"} mb="8" alignItems={"center"}>
        <Img
          w="clamp(8rem, 35%, 15rem)"
          src="/imgs/sendit.jpg"
          alt="sendit-img"
        />
        <Flex gap={"4"} mt="4" mb="8" justifyContent={"center"} alignItems={"center"}>
          <Link href="" w="clamp(5rem, 30%, 10rem)">
            <Img src="/imgs/tel.jpg" alt="telegram img" />
          </Link>
          <Link href="" w="clamp(5rem, 30%, 10rem)">
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
