import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SideHeading } from "./SideHeading";

export const FollowUs = () => {
    return (
        <Box bg="white" boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} mt={5}>
            <SideHeading title="Follow Us" />
            <Flex w="100%" p={5} flexDir={"column"} align={"center"}>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%'>
                        <IconX icon={<MdOutlineFacebook />} title={"Facebook"} bg="blue.600" />
                    </GridItem>
                    <GridItem w='100%'>
                        <IconX icon={<FaXTwitter />} title={"Twitter"} bg="blackAlpha.700" />
                    </GridItem>
                    <GridItem w='100%'>
                        <IconX icon={<FaYoutube />} title={"YouTube"} bg="red.500" />
                    </GridItem>
                    <GridItem w='100%'>
                        <IconX icon={<RiInstagramFill />} title={"Instagram"} bgGradient='linear-gradient(15deg,#ffb13d,#dd277b,#4d5ed4)' />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}
const IconX = ({ icon, title, ...props }: any) => {
    return (
        <Flex align={"center"} px={3} py={1} color="white" {...props}>
            {icon}
            <Text ml={4}>{title}</Text>
        </Flex>
    )
}