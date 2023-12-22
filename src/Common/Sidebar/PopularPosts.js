import { Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SideHeading } from "./SideHeading";
import { EmptyBox } from "../EmptyBox";
import { map } from "lodash";
import dayjs from "dayjs";
import { usePostStore } from "../../store/post";
import { useRouter } from "next/router";

export const PopularPosts = () => {
    const router = useRouter();

    const { getPopularPostsAction, getPopularPostsStatus, popularPosts } = usePostStore(s => ({
        getPopularPostsAction: s.getPopularPostsAction,
        getPopularPostsStatus: s.getPopularPostsStatus,
        popularPosts: s.popularPosts
    }))

    useEffect(() => {
        getPopularPostsAction()
    }, [getPopularPostsAction])

    return (
        <Box bg="white" boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} mt={5}>
            <SideHeading title="Popular Posts" />
            {popularPosts && popularPosts.length ?
                <Box p={5}>
                    {map(popularPosts, (post, index) => (
                        index === 0 ?
                            <Flex key={post._id} flexDir={"column"} h={{ base: 170, md: 230, lg: 200 }} w="100%" p={5} align={"start"} justify={"end"} color="white" bgImage={`url(${post.intro.url})`} backgroundSize={"cover"} bgRepeat={"no-repeat"}>
                                <Text backgroundColor="rgba(44, 130, 201, 0.7)" color="white" px={2} cursor={"pointer"} onClick={() => router.push("/?category=" + post.category.id)}>{post.category.label}</Text>
                                <Text fontSize={"20"} fontWeight={"bold"} textAlign={"start"} cursor={"pointer"} _hover={{ color: "gray.200" }} onClick={() => router.push("/" + post.link)}>{post.title}</Text>
                                <Flex fontSize={12} fontWeight={"semibold"} textShadow={"0 1px 2px rgba(0,0,0,0.1)"}>
                                    <Text>by </Text>
                                    <Text ml={1} fontWeight={"bold"} cursor={"pointer"} onClick={() => window.open(post.author?.url)}>{post.author.name}</Text>
                                    <Text ml={1}>-   {dayjs(post.postedAt).format("MMM DD, YYYY")}</Text>
                                </Flex>
                            </Flex>
                            :
                            <Flex key={post._id} w={"100%"} h={"70px"} mt={5}>
                                <Image h="100%" w={{ base: "40%", md: "20%", lg: "35%" }} objectFit={"contain"} aspectRatio={16 / 9} src={post.intro.url} alt="" />
                                <Box align="start" ml={3}>
                                    <Text fontSize={{ base: "14px", sm: "16px", lg: "14px", xl: "16px" }} fontWeight={"bold"} textAlign={"start"} cursor={"pointer"} _hover={{ color: "#9271CE" }} onClick={() => router.push("/" + post.link)}>{post.title}</Text>
                                    <Text fontSize={12}>{dayjs(post.postedAt).format("MMM DD, YYYY")}</Text>
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