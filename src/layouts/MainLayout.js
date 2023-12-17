import React from "react";
import { InternetStatus } from "../Common/InternetStatus";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Common/Header/Header";
import { CenterX } from "../Common/CenterX";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Footer } from "../Common/Footer";

export const MainLayout = (props) => {
    return (
        // <InternetStatus>
            <Box minH="100vh">
                <Header />
                <CenterX>
                    <Flex w="100%" flexDir={{ base: "column", lg: "row" }}>
                        <Box w={{ base: "100%", lg: "65%" }} pr={{ base: 0, lg: 3 }} >
                            {props.children}
                        </Box>
                        <Sidebar />
                    </Flex>
                </CenterX>
                <Footer />
            </Box>
        // </InternetStatus>
    );
};
