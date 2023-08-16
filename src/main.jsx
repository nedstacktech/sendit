import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const colors = {
  primary: "#8ae887",
  // secondary: "#000000"
}
const themeConfig = extendTheme({colors})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={themeConfig}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
