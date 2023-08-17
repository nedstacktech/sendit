import { Box, Flex, Img, Link } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UniswapContext } from "../App";

function Navbar() {
  const [setShowUniswap] = useContext(UniswapContext)
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
      <Box display={["none", "block"]} w="10%" >
        <Img src="/imgs/sendit.jpg" alt="logo" />
      </Box>
      <Flex gap="4">
        <Link href="#features">Feature</Link>
        <Link href="#howtojoin">How to join</Link>
        <Link display={{base: "none", md: "inline-block"}} onClick={() => setShowUniswap(true)}>Easy Swap</Link>
        <Link href="#masterminds">The masterminds</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
