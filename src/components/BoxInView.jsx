import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flex, useTheme } from "@chakra-ui/react";
const BoxInView = () => {
    const squareVariants = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    return (
        <>
            <Flex
                as={motion.div}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                className="square"
                h="5rem"
                w="5rem"
                bg="red"
            ></Flex>
        </>
    );
};

export default BoxInView;
