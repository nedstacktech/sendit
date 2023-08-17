import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import {
  Navbar,
  Jumbotron,
  Feature,
  HowToJoin,
  Masterminds,
  Faq,
  Footer,
  Uniswap,
} from "./components";
import { createContext, useState } from "react";

export const UniswapContext = createContext();
function App() {
  const [showUniswap, setShowUniswap] = useState(false);

  return (
    <Box py="6">
      <UniswapContext.Provider value={[setShowUniswap, showUniswap]}>
        <Navbar />
        <Jumbotron />
        <Feature />
        <HowToJoin />
        <Flex
          as="section"
          overflow={"hidden"}
          id="masterminds"
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          my={{ base: "4", md: "20" }}
        >
          <Masterminds />
          <Faq />
        </Flex>
        {showUniswap && <Uniswap />}
        <Footer />
      </UniswapContext.Provider>
    </Box>
  );
}

export default App;
