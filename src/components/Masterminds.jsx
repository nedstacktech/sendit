import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function Masterminds() {
  const masterminds = [
    { img: "/imgs/team1.jpg", title: "CEO", name: "Pieter Georgia" },
    { img: "/imgs/team2.jpg", title: "CFO", name: "Aiden Williams" },
    { img: "/imgs/team3.jpg", title: "CIO", name: "Noah Kaylee" },
    { img: "/imgs/team4.jpg", title: "CMO", name: "Benjamin Anna" },
    { img: "/imgs/team5.jpg", title: "CTO", name: "Dirk Jones" },
  ];
  return (
    <Box
      bg="#A2FF450D"
      p={["6", "8"]}
      w={{ md: "45%" }}
      as={motion.div}
      initial={{ transform: "translateX(-50%)", opacity: ".2" }}
      whileInView={{ transform: "translateX(0)", opacity: "1" }}
      // pl={["8", "12", "16", "24"]}
    >
      <Heading
        as="h2"
        textAlign={{ base: "left", md: "center" }}
        fontSize="clamp(1.2rem, 1.7vw, 2.3rem)"
        mb="4"
      >
        Meet The Unshakable Minds Behind $SENDIT
      </Heading>
      <Text>
        A Team that redefines trust in the crypto sphere! With a collective
        brilliance that’s as solid as blockchain, Our Team is the corner stone
        of transparency, innovation, and unwavering commitment. Each member's
        expertise form a symphony of reliability, ensuring your investment
        safety and growth. When you invest in $SENDIT, you are part of a family
        built on integrity and vision. Join us and experience the future of
        crypto, lead by a team you can unequivocally rely on.
      </Text>
      <Flex gap="8" flexWrap={"wrap"} my={"8"} justifyContent={"center"}>
        {masterminds.map(({ name, title, img }, index) => (
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            key={index}
            w="25%"
            textAlign={"center"}
          >
            <Img
              src={img}
              alt={`${title} image`}
              w="clamp(2.4rem, 5vw, 5rem)"
              h="clamp(2.4rem, 5vw, 5rem)"
              borderRadius={"50%"}
              mb="2"
            />
            <Heading as="h5" fontSize="clamp(1rem, 1.5vw, 2rem)">
              {title}
            </Heading>
            <Text>{name}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
