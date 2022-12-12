import { Box, Flex, Image, keyframes, Text, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NeonBox = ({ size, color, shadow }) => {
    const theme = useTheme();

    const animationKeyframes = keyframes`
    0% {
        transform: rotateX(-30deg) rotateY(0deg);

        
    }
    50% {
        transform: rotateX(-30deg) rotateY(180deg);

    }
    100% {
        transform: rotateX(-30deg) rotateY(360deg);

    }

`;

    const animation = `${animationKeyframes} 8s linear infinite`;
    return (
        <>
            <Box
                as={motion.div}
                classname="cube wrapper"
                position="relative"
                alignSelf="center"
                w={`${size}px`}
                h={`${size}px`}
                style={{ transformStyle: "preserve-3d" }}
                animation={animation}
                role="group"
            >
                <Box
                    className="top"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    background="#090909"
                    style={{ transformStyle: "preserve-3d" }}
                    transform={`rotateX(90deg) translateZ(${size / 2}px)`}
                    _before={{
                        content: `""`,
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: `${size}px`,
                        height: `${size}px`,
                        background: `rgb(${shadow})`,
                        transform: `translateZ(${
                            size - size * 2 - size / 3
                        }px)`,
                        filter: "blur(20px)",
                        boxShadow: `0 0 20px 20px rgba(${shadow}, 0.2), 0 0 20px 20px rgba(${shadow}, 0.4), 0 0 20px 20px rgba(${shadow}, 0.6), 0 0 20px 20px rgba(${shadow}, 0.8)`,
                    }}
                />
                <Box
                    className="cube"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        h="100%"
                        transition="all 0.5s ease-in-out"
                        _groupHover={{
                            background: `linear-gradient(#090909, rgba(${color}))`,
                        }}
                        background={`linear-gradient(#090909, #202020)`}
                        style={{ transformStyle: "preserve-3d" }}
                        transform={`rotateY(0deg) translateZ(${size / 2}px)`}
                    />

                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        h="100%"
                        _groupHover={{
                            background: `linear-gradient(#090909, rgba(${color}))`,
                            transition: "all 0.5s ease-in-out",
                        }}
                        background={`linear-gradient(#090909, #202020)`}
                        style={{ transformStyle: "preserve-3d" }}
                        transform={`rotateY(90deg) translateZ(${size / 2}px)`}
                    />

                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        h="100%"
                        _groupHover={{
                            background: `linear-gradient(#090909, rgba(${color}))`,
                        }}
                        background={`linear-gradient(#090909, #202020)`}
                        style={{ transformStyle: "preserve-3d" }}
                        transform={`rotateY(180deg) translateZ(${size / 2}px)`}
                    />

                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        h="100%"
                        _groupHover={{
                            background: `linear-gradient(#090909, rgba(${color}))`,
                        }}
                        background={`linear-gradient(#090909, #202020)`}
                        style={{ transformStyle: "preserve-3d" }}
                        transform={`rotateY(270deg) translateZ(${size / 2}px)`}
                    />
                </Box>
            </Box>
        </>
    );
};

export default NeonBox;
