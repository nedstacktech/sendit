import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

export default function Masterminds() {
  const masterminds = [
    { img: "/imgs/team1.jpg", title: "CEO", name: "Pieter Hendrik" },
    { img: "/imgs/team2.jpg", title: "CFO", name: "Aiden Lucas" },
    { img: "/imgs/team3.jpg", title: "CIO", name: "Noah Isa" },
    { img: "/imgs/team4.jpg", title: "CMO", name: "Benjamin Anna" },
    { img: "/imgs/team5.jpg", title: "CTO", name: "Dirk Grace" },
  ];
  return (
    <Box bg="#A2FF450D" p="6">
      <Heading as="h2" fontSize={"1.2rem"} mb="4" lineHeight={"1.2rem"}>
        Meet The Unshakable Minds Behind $SENDIT
      </Heading>
      <Text>
        A Team that redefines trust in the crypto sphere! With a collective
        brilliance that’s as solid as blockchain, Our Team is the corner stone
        of transparency, innovation, and unwavering commitment. Each member
        expertise form a symphony of reliability, ensuring your investment
        safety and growth. When you invest in $SENDIT, you are part of a family
        built on integrity and vision. Join us and experience the future of
        crypto, lead by a team you can unequivocally rely on.
      </Text>
      <Flex gap="8" flexWrap={"wrap"} mt={"4"}>
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
              w="2.4rem"
              h="2.4rem"
              borderRadius={"50%"}
              mb="2"
            />
            <Heading as="h5"  fontSize={".8rem"}>
              {title}
            </Heading>
            <Text>{name}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
