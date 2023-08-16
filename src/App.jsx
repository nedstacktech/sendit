import "./App.css";
import { Box } from "@chakra-ui/react";
import { Navbar, Jumbotron, Feature, HowToJoin, Masterminds } from "./components";

function App() {
  return (
    <Box py="6">
      <Navbar />
      <Jumbotron />
      <Feature />
      <HowToJoin />
      <Masterminds />
    </Box>
  );
}

export default App;
