import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CenterX } from "@/Common/CenterX";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const HeaderTop = () => {
    return (
        <Box bg={"black"}>
            <CenterX>
                <Flex w="100%" justify={"space-between"} py={1}>
                    <HStack justify={"flex-end"} mt={{ base: 1, sm: 0 }} color="white">
                        <Text>Latest Post: </Text>
                        <Text>New Post Here</Text>
                    </HStack>
                    <HStack display={{ base: "none", md: "inline-flex" }} gap={4} justify={"flex-end"} color="white" mt={{ base: 1, sm: 0 }}>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaYoutube />
                        <RiInstagramFill />
                    </HStack>
                </Flex>
            </CenterX>
        </Box>
    )
}

const IconX = ({ bgColor, bgGradient, icon, link }: any) => {
    return (
        <Flex w={"20px"} h={"20px"} border={"3px solid"} bg="white" borderRadius={100} borderColor={"gray.200"} align="center" position="relative" justify="center" role="group" overflow={"hidden"} cursor={"pointer"} onClick={() => window.open(link)}>
            <Flex position="absolute" w={"100%"} zIndex={1} h={"0"} bottom={0} _groupHover={{ h: "100%", bg: bgColor, bgGradient: bgGradient, transition: "height .3s linear" }} />
            {bgColor ?
                <Flex position="relative" color={bgColor} zIndex={9} transition='all 0.5s' _groupHover={{ color: "#fff", transform: "rotateY(360deg)" }}>
                    {icon}
                </Flex>
                :
                <Flex
                    position="relative"
                    as="span"
                    bgGradient={bgGradient}
                    bgClip="icon"
                    zIndex={9}
                    transition='all 0.5s'
                    _groupHover={{ color: "#fff", transform: "rotateY(360deg)" }}
                >
                    {icon}
                </Flex>
            }
        </Flex>
    )
}