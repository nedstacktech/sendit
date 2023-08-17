import { Link } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UniswapContext } from "../App";
import { motion } from "framer-motion";

export default function Button({ text, type }) {
  const [setShowUniswap] = useContext(UniswapContext)
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
      display={"flex"}
      _hover={{bg: "primary", color: "black"}}
      // transition={"all .3s ease"}
      w="fit-content"
      onClick={() => setShowUniswap(true)}
      as={motion.a}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1.01 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 50,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      {text}
    </Link>
  );
}
