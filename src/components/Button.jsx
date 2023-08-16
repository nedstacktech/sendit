import { Link } from "@chakra-ui/react";
import React from "react";

export default function Button({ text, link, type }) {
  return (
    <Link
      px="4"
      py="2"
      letterSpacing={".7px"}
      fontWeight={"bold"}
      borderRadius={".7rem"}
      border={"2px solid"}
      color={type === "primary" ? "white" : "whiteAlpha.500"}
      borderColor={type === "primary" ? "primary" : "whiteAlpha.500"}
      href={link}
      display={"flex"}
      w="fit-content"
    >
      {text}
    </Link>
  );
}
