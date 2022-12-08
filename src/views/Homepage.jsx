import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { MouseParallaxChild } from "react-parallax-mouse/";
import Tesseract from "../components/Tesseract";
//import { SVGComponent } from "./components/SVGComponent";
function Homepage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    function parallax(e) {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", parallax);
    const theme = useTheme();
    // parallax effect on mouse scroll (not working)

    return (
        <>
            <Flex bg="#090909" h='200vh'>
                    <Flex as={MouseParallaxContainer} w="100vw" h="100vh">
                        <Flex
                            as={MouseParallaxChild}
                            factorX={0.01}
                            factorY={0.01}
                            w="40%"
                            h="100%"
                            flexDir="column"
                            ml="10rem"
                            zIndex={1000}
                            backdropFilter="blur(10px)"
                        >
                            <Text
                                fontFamily={theme.fonts.primary}
                                fontSize="4xl"
                                color="#fff"
                                letterSpacing={-1}
                            >
                                Hey!, I am Luciano.
                            </Text>
                            <Text
                                fontFamily={theme.fonts.primary}
                                fontSize="2xl"
                                color="#fff"
                            >
                                I'm a fullstack developer and I love to create
                                interactive things.
                            </Text>
                        </Flex>
                        <Flex
                            position={"absolute"}
                            justifyContent="center"
                            w="100%"
                            h="100%"
                        >
                            <Tesseract size={100} />
                            <Tesseract size={300} />
                        </Flex>
                    </Flex>
            </Flex>
        </>
    );
}

export default Homepage;
