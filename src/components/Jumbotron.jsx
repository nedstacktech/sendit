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
import { motion } from "framer-motion";

function Jumbotron() {
  return (
    <Box px={["6", "12", "16", "24"]}>
      <Flex
        flexDir={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems={["center"]}
        gap="4"
      >
        <Box
          as={motion.div}
          initial={{ transform: "translateY(2vh)", opacity: ".2" }}
          whileInView={{ transform: "translateY(0vh)", opacity: "1" }}
          transition={"all .3s ease"}
        >
          <Heading
            as="h1"
            fontSize={["1.2rem", "2rem", "3rem", "4rem"]}
            textAlign={["center", "left"]}
            textTransform={"uppercase"}
          >
            <Text as="p">$sendit launch</Text>
          </Heading>
          <Text textAlign={["center", "left"]} opacity={".5"}>
          Don't fade this one anon!
          </Text>
        </Box>
        <Box
          w="clamp(6.25rem, 30%, 25rem)"
          as={motion.div}
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Img src="/imgs/sendit.jpg" w="100%" transitionDelay={"1s"} />
        </Box>
      </Flex>
      <Flex gap={["4", "12"]} mt="4" justifyContent={["center", "flex-start"]}>
        <Button text={"BUY $SENDIT"} type="primary" />
      </Flex>
    </Box>
  );
}

export default Jumbotron;
