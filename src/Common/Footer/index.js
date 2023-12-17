import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { UsefulLinks } from "./UsefulLinks";
import { Intro } from "./Intro";

export const Footer = () => {
    return (
        <Box w="100%" px={10} py={6} mt={5} bg="blackAlpha.900" color="white">
            <Grid display={{ base: "row", md: "grid" }} templateColumns={`repeat(3, 1fr)`} gap={10} fontWeight={"semibold"}>
                <GridItem w='100%' py={2}>
                    <Intro />
                </GridItem>
                <GridItem w='100%' py={2}>
                    <UsefulLinks />
                </GridItem>
                <GridItem w='100%' py={2}>
                    <UsefulLinks />
                </GridItem>
            </Grid>
        </Box >
    )
}