import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Intro } from "./Intro";
import { UsefulLinks } from "./UsefulLinks";
import { CenterX } from "@/Common/CenterX";

export const Footer = () => {
    return (
        <Box w="100%" mt={5} bg="blackAlpha.900" color="white">
            <Intro />
            <CenterX>
                <Grid display={{ base: "row", md: "grid" }} py={5} templateColumns={`repeat(3, 1fr)`} gap={10} fontWeight={"semibold"}>
                    <GridItem w='100%' py={2}>
                    </GridItem>
                    <GridItem w='100%' py={2}>
                        <UsefulLinks />
                    </GridItem>
                    <GridItem w='100%' py={2}>
                        <UsefulLinks />
                    </GridItem>
                </Grid>
            </CenterX>
            <Flex borderTop={"1px solid"} borderColor={"gray.500"} flexDir={"column"} align="center">
                <Flex
                    py={3}
                    w={{ base: "95%", sm: "90%", md: "90%", lg: "95%", xl: "70%" }}
                    flexDir={{ base: "column-reverse", md: "row" }}
                    justify={"space-between"}
                    align={"center"}
                >
                    <Flex align={"center"} gap={2} mt={{ base: 2, md: 0 }}>
                        <Text>Designed with</Text>
                        <FaHeart color="red" />
                        <Text>by</Text>
                        <Text color={"#9271CE"} cursor={"pointer"} onClick={() => window.open("https://www.instagram.com/adityajadon_06/")}>Aditya Pratap Singh</Text>
                    </Flex>
                    <Flex align={"center"} gap={3}>
                        <Text>Home</Text>
                        {/* <Text>Contact Us</Text> */}
                        <Text>Privacy Policy</Text>
                        <Text>Disclaimer</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box >
    )
}