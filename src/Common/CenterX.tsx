import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const CenterX = ({ children }: any) => {
    return (
        <Flex flexDir={"column"} align="center">
            <Flex w={{ base: "95%", sm: "90%", md: "90%", lg: "95%", xl: "70%" }} align="start" flexDir={{ base: "column", lg: "row" }}>
                {children}
            </Flex>
        </Flex>
    )
}