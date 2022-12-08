import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import LogoSVG from "./components/LogoSVG";
import Homepage from "./views/Homepage";

export const App = () => {
    
    return (
        <>
            <Flex w="100%" h="15vh" position="fixed">
                <LogoSVG />
            </Flex>
            <Flex h="100vh" w="100vw" overflow="scroll">
                <Flex h="200vh">
                    <Homepage />
                </Flex>
            </Flex>
            <Flex w="100vw" h="100vh" bg="red"></Flex>
        </>
    );
};

export default App;
