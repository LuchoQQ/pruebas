import { isValidMotionProp, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
    Flex,
    Text,
    theme,
    Box,
    Container,
    keyframes,
    chakra,
    shouldForwardProp,
    Image,
    useTheme,
} from "@chakra-ui/react";
import NeonBox from "../components/NeonBox";

const AboutPage = () => {
    const theme = useTheme();
    const [width, setWidth] = useState(0);
    const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0); border-radius: 20%;  x: '500px'}
    100% { transform: scale(1) rotate(360deg); border-radius: 20%; x: '0px' }
  `;
    useEffect(() => {
        setWidth(window.innerWidth);
        console.log("refresh");
    }, []);
    const animation = `${animationKeyframes} 90s linear infinite`;
    const ChakraBox = chakra(motion.div, {
        /**
         * Allow motion props and non-Chakra props to be forwarded.
         */
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });
    return (
        <>
            <Flex
                w="100%"
                h="20vh"
                bg={`rgb(${theme.colors.primary})`}
                overflow="hidden"
            >
                <ChakraBox
                    animate={{
                        x: [0, -width],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    left="0"
                    w="100%"
                >
                    <Flex
                        h="20vh"
                        alignItems="center"
                        gap="5rem"
                        fontSize="6xl"
                        fontFamily={theme.fonts.secondary}
                        color="#f3f4f5"
                        whiteSpace="nowrap"
                        w="100%"
                    >
                        <Text>BIENVENIDO</Text>
                        <Text>ようこそ</Text>
                        <Text>WELCOME</Text>
                        <Text>BIENVENIDO</Text>
                        <Text>ようこそ</Text>
                        <Text>WELCOME</Text>
                        <Text>BIENVENIDO</Text>
                        <Text>ようこそ</Text>
                        <Text>WELCOME</Text>
                        <Text>BIENVENIDO</Text>
                        <Text>ようこそ</Text>
                        <Text>WELCOME</Text>
                    </Flex>
                </ChakraBox>
            </Flex>
            <Flex
                id="about"
                w="100%"
                h="100vh"
                bg="#080808"
                justifyContent="space-around"
                fontFamily={theme.fonts.primary}
                fontSize="2xl"
            >
                <Flex w="35%" mt="20vh" color="#f1f2f3" flexDir='column' gap='2rem' justifyContent='center'>
                    <Text fontSize='xl'>
                        I am a multidisciplinary developer with a passion for
                        visual interfaces and complex system architectures.
                    </Text>
                    <Text fontSize='lg'>
                        Developing is my main activity for almost the last two
                        years.
                    </Text>
                    <Text fontSize="sm">
                    So now I want to show you what I've been working on.
                    </Text>
                </Flex>
                <NeonBox
                    size={200}
                    color={"224, 2, 44"}
                    shadow={theme.colors.primary}
                />
            </Flex>
        </>
    );
};

export default AboutPage;
