import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/fira-code/600.css"; // Defaults to weight 400.
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins/500.css"
const theme = extendTheme({
    fonts: {
        primary: "Fira Code",
        secondary: "Poppins"
    },
    colors: {
        primary: "179, 14, 45"
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
