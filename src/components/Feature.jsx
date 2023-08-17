import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import Uniswap from "./Uniswap";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <Flex
      as="section"
      id="feature"
      flexDir={{ base: "column", md: "row" }}
      gap="8"
      my={["8", "16", "24"]}
      px={["8", "12", "16", "24"]}
      justifyContent={"space-between"}
    >
      <Box w={{ base: "100%", md: "40%" }} mt="4">
        <Heading
          as={motion.h2}
          initial={{ transform: "translateX(-5vw)" }}
          whileInView={{ transform: "translateX(0vw)" }}
          fontSize={"clamp(1.3rem, 4vw, 3rem)"}
          mb={["4", "6"]}
        >
          Key Feature
        </Heading>
        <Box
          as={motion.div}
          initial={{ transform: "translateY(5vw)", opacity: 0.2 }}
          whileInView={{ transform: "translateY(0vw)", opacity: 1 }}
        >
          <Heading as={"h4"} fontSize="clamp(.8rem, 2vw, 2rem)" mb="2">
            Earn Passive Income
          </Heading>
          <Text mb="4">
            Each person that holds minimum $100 of our token $SENDIT will
            receive or be airdropped $15 worth of ETH every 5 days straight into
            their wallet! So every $100 you hold of our token, you will get
            15 dollars ($15) every 5 days. There is no limit to how much you can hold and
            be rewarded so feel free to go crazy!
          </Text>
          <Text>
            As an example, if you were to buy $1000 of $SENDIT you will receive
            $150 of ETH every 5 days! Isn’t this the craziest opportunity? It’s
            a no brainer pretty much! Your time to become filthy rich is here!
          </Text>
        </Box>
      </Box>
      <Box
        transform={"translateX(-1rem)"}
        py={["2", "4"]}
        px={{ base: "4", md: "12" }}
        w={{ base: "100%", md: "50%" }}
        bg="linear-gradient(96.22deg, rgba(162, 255, 69, 0.5) 15.08%, rgba(217, 217, 217, 0) 54.91%)"
      >
        <Heading as={motion.h3}
          initial={{ transform: "translateX(5vw)", opacity: 0.2 }}
          whileInView={{ transform: "translateX(0vw)", opacity: 1 }} fontSize={"clamp(1rem, 2.5vw, 2.5rem)"} mb="4">
          Get ready to embark on a wild ride with $SENDIT
        </Heading>
        <Text
          as={motion.p}
          initial={{ transform: "translateY(-5vw)", opacity: 0.2 }}
          whileInView={{ transform: "translateY(0vw)", opacity: 1 }}
        >
          The ultimate crypto meme coin that’s all about seizing the moment and
          embracing the chaos and universe. With it's playful spirit and a
          community that knows how to live to the fullest, $SENDIT isn’t just a
          coin - it’s a movement. Join us in sending convention flying out the
          window and diving head first into the exhilarating world of
          decentralized fun. Strap on, Hold on, and let’s ‘$SENDIT’ to the moon
          and beyond!
        </Text>
        <Flex mt="4" justifyContent={"space-between"} alignItems={"center"}>
          <Button text="BUY $SENDIT" type={"primary"} />
          <Img src="/imgs/world.jpg" w="clamp(4.2rem, 20%, 7.5rem)" />
        </Flex>
      </Box>
    </Flex>
  );
}
