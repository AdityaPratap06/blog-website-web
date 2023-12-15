import { Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { SideHeading } from "./SideHeading";
import { EmptyBox } from "../EmptyBox";
import { map } from "lodash";
import dayjs from "dayjs";

const popularPosts = [1, 1, 1, 1]
export const PopularPosts = () => {
    return (
        <Box bg="white" boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} mt={5}>
            <SideHeading title="Popular Posts" />
            {popularPosts && popularPosts.length ?

                <Box p={5}>
                    {map(popularPosts, (post, index) => (
                        index === 0 ?
                            <Flex flexDir={"column"} h={170} w="100%" p={5} align={"start"} justify={"end"} border={"1px solid red"} color="white" bgImage={"url('/assets/Ganesh11.jpg')"} backgroundSize={"cover"} bgRepeat={"no-repeat"}>
                                <Text backgroundColor="rgba(44, 130, 201, 0.7)" color="white" px={2}>Temple</Text>
                                <Text fontSize={"20"} fontWeight={"bold"} textAlign={"start"}>Pellentesque facilisis rutrum lorem</Text>
                                <Flex fontSize={12} fontWeight={"semibold"} textShadow={"0 1px 2px rgba(0,0,0,0.1)"}>
                                    <Text>by </Text>
                                    <Text ml={1} fontWeight={"bold"}>Aditya Pratap Singh</Text>
                                    <Text ml={1}>-   {dayjs(new Date()).format("MMM DD, YYYY")}</Text>
                                </Flex>
                            </Flex>
                            :
                            <Flex w={"100%"} h={"70px"} mt={5}>
                                <Image h="100%" w="40%" src={'/assets/Ganesh11.jpg'} alt="" />
                                <Box align="start" ml={3}>
                                    <Text fontSize={"15px"} fontWeight={"bold"} textAlign={"start"}>Pellentesque facilisis rutrum lorem</Text>
                                    <Text fontSize={12}>{dayjs(new Date()).format("MMM DD, YYYY")}</Text>
                                </Box>
                            </Flex>
                    ))}
                </Box>
                :
                <EmptyBox title={"No Popular Posts"} />
            }

        </Box>
    )
}