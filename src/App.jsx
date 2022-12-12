import Homepage from "./views/Homepage";
import AboutPage from "./views/AboutPage";
import Header from "./components/Header";
import { Flex, Grid } from "@chakra-ui/react";
export const App = () => {
    return (
        <>
            <Flex
                flexDir="column"
                maxW="100vw"
                h="auto"
                bg="#090909"
                alignItems="center"
            >
                <Flex flexDir='column' w='100%'maxW='1600px' alignContent='center'>
                    <Header />
                    <Homepage />
                    <AboutPage />
                </Flex>
            </Flex>
        </>
    );
};

export default App;
