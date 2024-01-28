import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const Intro = () => {
    return (
        <Flex w={"100%"} borderBottom={"1px solid"} borderColor={"gray.500"} flexDir={"column"} align="center">
            <Flex
                py={3}
                w={{ base: "95%", sm: "90%", md: "90%", lg: "95%", xl: "70%" }}
                flexDir={{ base: "column-reverse", md: "row" }}
                justify={"space-between"}
                align={"center"}
            >
                <Image h="50px" src="/assets/logo1.png" alt="The Blogging Buzz" />
                <Flex gap={4}>
                    <IconX bgColor="blue.700" icon={<FaFacebookF />} link={"https://www.facebook.com/people/The-Blogging-Buzz/61555000862976/"} />
                    <IconX bgColor="gray.700" icon={<FaXTwitter />} />
                    <IconX bgColor="red.500" icon={<FaYoutube />} link={"https://www.youtube.com/channel/UC84d7MJTLF7UkLPeg7RSZHw"} />
                    <IconX bgGradient={"linear-gradient(15deg,#ffb13d,#dd277b,#4d5ed4)"} icon={<RiInstagramFill />} link={"https://www.instagram.com/thebloggingbuzz_"} />
                </Flex>
            </Flex>
        </Flex>
    )
}

const IconX = ({ bgColor, bgGradient, icon, link }: any) => {
    return (
        <Flex w={"40px"} h={"40px"} border={"3px solid"} bg="white" borderRadius={100} borderColor={"gray.200"} align="center" position="relative" justify="center" role="group" overflow={"hidden"} cursor={"pointer"} onClick={() => window.open(link)}>
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