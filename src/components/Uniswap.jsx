import { Box, Grid, Skeleton, Spinner } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UniswapContext } from "../App";
import { motion } from "framer-motion";

const Uniswap = () => {
  const [setShowUniswap] = useContext(UniswapContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  let handleIframeLoaded = () => setHasLoaded(true);
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
      <Grid
        pos="relative"
        w="clamp(18rem, 50vw, 30rem)"
        h="clamp(24rem, 55vh, 30rem)"
        // overflow={"hidden"}
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
        placeItems={"center"}
      >
        {!hasLoaded && (
          <Spinner emptyColor="gray.500" speed=".65s" thickness=".4rem" size={"xl"} color="primary" />
        ) }
          <Skeleton isLoaded={hasLoaded}>

            <iframe
              title="Uniswap Interface"
              id="iframe-id"
              onLoad={handleIframeLoaded}
              src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
            />
          </Skeleton>
      </Grid>
    </Grid>
  );
};

export default Uniswap;
