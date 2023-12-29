import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Intro = () => {
    return (
        <Box>
            <Text fontWeight={"bold"} fontSize={16}>Introduction</Text>

            <Box mt={4}>
                <Image h={"50px"} src="/assets/logo1.png" alt="Intro" />
                <Text>diu dnnnsd rfjun  fjdnfnds vdsnfvi ndfv bn iu nfvn nvfndfvn dfn vjdhfvf.</Text>
            </Box>
        </Box>
    )
}