import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <Box as="footer" px="8">
      <Flex flexDir={"column"} mb="8" alignItems={"center"}>
        <Img
          as={motion.img}
          whileInView={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
          display="block"
          w="clamp(8rem, 35%, 15rem)"
          src="/imgs/sendit.jpg"
          alt="sendit-img"
        />
        <Flex
          gap={"4"}
          mt="4"
          mb="8"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
          target="_blank"
            href=""
            w="clamp(5rem, 30%, 10rem)"
            _hover={{ transform: "scale(1.1)" }}
            transition={"all .2s ease"}
          >
            <Img src="/imgs/tel.jpg" alt="telegram img" />
          </Link>
          <Link
          target="_blank"
            href="https://twitter.com/Eth_SendIt"
            _hover={{ transform: "scale(1.1)" }}
            transition={"all .2s ease"}
            w="clamp(5rem, 30%, 10rem)"
          >
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
