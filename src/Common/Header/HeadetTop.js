import { CenterX } from "@/common/CenterX";
import { Box, Flex, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { LiaPhoneVolumeSolid } from "react-icons/lia"
import React from "react";

export const HeaderTop = () => {
    return (
        <Box bg={"black"}>
            <CenterX>
                <Flex w="100%"  justify={"space-between"}py={1}>
                    <HStack justify={"flex-end"} mt={{ base: 1, sm: 0 }} color="white">
                        <Text>Latest Post: </Text>
                        <Text>New Post Here</Text>
                    </HStack>
                    <HStack display={{ base: "none", md: "inline-flex" }} justify={"flex-end"} color="white" mt={{ base: 1, sm: 0 }}>
                        <FaFacebookF/>
                        <FaFacebookF/>
                        <FaFacebookF/>
                        <FaFacebookF/>
                        {/* <IconX bg={"blue.600"} icon={<AiFillLinkedin />} link={"https://www.linkedin.com/in/aditya-mern-full-stack-developer/"} />
                        <IconX bg={"blue.600"} icon={<FaFacebookF />} link={"https://www.facebook.com/aditya.jadon.52056"} />
                        <IconX bg={"blue.600"} icon={<AiFillGithub />} link={"https://github.com/AdityaPratap06"} />
                        <IconX bg={"blue.600"} icon={<AiOutlineInstagram />} link={"https://www.instagram.com/adityajadon_06/"} /> */}
                    </HStack>
                </Flex>
            </CenterX>
        </Box>
    )
}

const IconX = ({ icon, link }) => {
    return (
        <Flex w={{ base: 22, sm: 30 }} h={{ base: 22, sm: 30 }} border={"3px solid"} bg="white" borderRadius={100} borderColor={"gray.200"} align="center" position="relative" justify="center" role="group" overflow={"hidden"} onClick={() => window.open(link)}>
            <Flex position="absolute" w={"100%"} zIndex={1} h={"0"} bottom={0} _groupHover={{ h: "100%", bg: "#008FFF", transition: "height .3s linear" }} />
            <Flex position="relative" color="#262626" zIndex={9} transition='all 0.5s' _groupHover={{ color: "#fff", transform: "rotateY(360deg)" }}>
                {icon}
            </Flex>
        </Flex>
    )
}