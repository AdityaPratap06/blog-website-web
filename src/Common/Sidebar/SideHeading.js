import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const SideHeading = ({ title }) => {
    return (
        <Box px={5} py={2} borderBottom={"1px solid"} borderColor={"gray.300"}>
            <Text w="fit-content" px={3} fontSize={"large"} fontWeight={"bold"} borderBottom={"2px solid black"}>{title}</Text>
        </Box>
    )
}