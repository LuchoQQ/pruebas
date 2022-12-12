import React from "react";
import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import LogoSVG from "../components/LogoSVG";
import { Link } from "react-scroll";

const Header = () => {
    const theme = useTheme();

    return (
        <>
            <Flex w="100%" maxW="1600px" h="15vh" position="fixed" zIndex={999}>
                <LogoSVG />
                <Flex
                    fontFamily={theme.fonts.secondary}
                    alignItems="center"
                    ml="auto"
                    mr="auto"
                    gap="3rem"
                    fontSize="xs"
                    color="#f3f4f5"
                >
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                    >
                        <Text
                            position="relative"
                            _before={{
                                content: `""`,
                                position: "absolute",
                                width: "1px",
                                height: "100%",
                                bottom: "0",
                                left: "150%",
                                backgroundColor: "white",
                            }}
                        >
                            HOME
                        </Text>
                    </Link>
                    <Link to="about" spy={true}>
                        <Text
                            position="relative"
                            _before={{
                                content: `""`,
                                position: "absolute",
                                width: "1px",
                                height: "100%",
                                bottom: "0",
                                left: "150%",
                                backgroundColor: "white",
                            }}
                        >
                            ABOUT
                        </Text>
                    </Link>
                    <Link to="work" spy={true}>
                        <Text
                            position="relative"
                            _before={{
                                content: `""`,
                                position: "absolute",
                                width: "1px",
                                height: "100%",
                                bottom: "0",
                                left: "150%",
                                backgroundColor: "white",
                            }}
                        >
                            WORK
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;
