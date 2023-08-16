import { Flex, Link } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex
      textTransform={"capitalize"}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={"bold"}
      gap="4"
      mb="8"
      color={"whiteAlpha.500"}
    >
      <Link href="#features">
        Features
      </Link>
      <Link href="#howtojoin">
        How to join
      </Link>
      <Link href="#masterminds">
        The masterminds
      </Link>
    </Flex>
  );
}

export default Navbar;
