import { Box, Flex, Img, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex
      textTransform={"capitalize"}
      justifyContent={["center", "space-between"]}
      alignItems={"center"}
      fontWeight={"bold"}
      mb="8"
      px={["6", "12", "16", "24"]}
      color={"whiteAlpha.500"}
    >
      <Box display={["none", "block"]}>
        <Img src="/imgs/sendit.jpg" w="20%" alt="logo" />
      </Box>
      <Flex gap="4">
        <Link href="#features">Feature</Link>
        <Link href="#howtojoin">How to join</Link>
        <Link href="#easyswap">Easy Swap</Link>
        <Link href="#masterminds">The masterminds</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
