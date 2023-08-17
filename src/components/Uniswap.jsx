import { Box, Grid, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UniswapContext } from "../App";
import { motion } from "framer-motion";

const Uniswap = () => {
  const [setShowUniswap, showUniswap] = useContext(UniswapContext);
  return (
    <Grid
      pos="fixed"
      placeItems={"center"}
      zIndex={"2"}
      h="100vh"
      w="100vw"
      left="0"
      top="0"
    >
      <Box
        onClick={() => setShowUniswap(false)}
        bg="rgba(0,0,0,.6)"
        pos={"absolute"}
        inset="0"
      />
      <Box
        pos="relative"
        w="clamp(18rem, 50vw, 30rem)"
        h="clamp(24rem, 55vh, 30rem)"
        overflow={"hidden"}
        borderRadius={"3xl"}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1.01 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 50,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Spinner w="20" h="20" color="primary" />
        <iframe
          title="Uniswap Interface"
          id="iframe-id"
          src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
        />
      </Box>
    </Grid>
  );
};

export default Uniswap;
