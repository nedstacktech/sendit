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
} from "./components";

function App() {
  return (
    <Box py="6">
      <Navbar />
      <Jumbotron />
      <Feature />
      <HowToJoin />
      <Flex
        as="section"
        id="masterminds"
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        my={{ base: "4", md: "20" }}
      >
        <Masterminds />
        <Faq />
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
