import { Box, Button, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { MdLocalPhone, MdMail } from "react-icons/md";

export const GetInTouch = () => {
    return (
        <Flex w="100%" p={5} my={5} flexDir={{ base: "column-reverse", md: "row" }} justify={"space-between"}>
            <Box w={{ base: "100%", md: "49%" }} mt={{ base: 10, md: 0 }}>
                <Text fontSize={22} fontWeight={"semibold"} color={"shade2"}>Get In Touch</Text>
                <Text w="100%">We are here for you! How can we help?</Text>
                <Flex mt={10} w="100%" flexDir={"column"} gap={6}>
                    <Input variant={"ghost"} bg={"#EFEBFF"} placeholder="Enter your name" />
                    <Input variant={"ghost"} bg={"#EFEBFF"} placeholder="Enter your email address" />
                    <Textarea variant={"ghost"} bg="#EFEBFF" placeholder="Enter your query here..." />
                    <Button w="100%" color="white" bg="shade2" colorScheme="#7752FE">Submit</Button>
                </Flex>
            </Box>
            <Box w={{ base: "100%", md: "45%" }} color="shade2">
                <Image src="/assets/GetInTouch.jpg" alt="GetInTouch" />
                <Flex mt={3} align={"center"}>
                    <Flex p={2} border={"1px solid"} borderColor={"shade4"} borderRadius={"50%"}>
                        <MdLocalPhone />
                    </Flex>
                    <Text ml={3}>+91 9876543210</Text>
                </Flex>
                <Flex mt={3} align={"center"}>
                    <Flex p={2} border={"1px solid"} borderColor={"shade4"} borderRadius={"50%"}>
                        <MdMail />
                    </Flex>
                    <Text ml={3}>thebloggingbuzz@gmail.com</Text>
                </Flex>
            </Box>
        </Flex>
    )
}