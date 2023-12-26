import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { useRouter } from "next/router";

export const SinglePost = ({ key, post }: any) => {
    const router = useRouter()

    return (
        <Flex key={key} mt={5} p={5} w={"100%"} bg="white" cursor={"default"} align="start" display={"flex"} flexDir={{ base: "column", lg: "row" }} boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} >
            <Image w={{ base: "100%", lg: "35%" }} h={190} aspectRatio={{ base: 16 / 9, lg: "none" }} objectFit={"cover"} src={post.intro.url} alt="" />
            <Box w={{ base: "100%", lg: "65%" }} ml={{ base: 0, md: 5 }}>
                <Text
                    mt={{ base: 2, lg: 0 }}
                    fontSize={{ base: 18, lg: 22 }}
                    fontWeight={"bold"}
                    cursor={"pointer"}
                    onClick={() => router.push("/" + post.link)}
                    _hover={{ color: "#9271CE" }}
                >
                    {post.title}
                </Text>
                <Flex pb={2} fontSize={{ base: 10, sm: 12, lg: 13 }} color="gray.500" fontStyle={"italic"}>
                    <Text cursor={"pointer"}>{post.tags?.[0]}</Text>
                    <Text mx={2}>-</Text>
                    <Text cursor={"pointer"} _hover={{ color: "gray.900" }} onClick={() => window.open(post.author.url)}>{post.author?.name}</Text>
                    <Text mx={2}>-</Text>
                    <Text>{dayjs(post.postedAt).format("MMMM DD, YYYY")}</Text>
                </Flex>
                <Flex align={"end"}>
                    <Text
                        maxH="calc(1.2em * 4)"
                        align={"justify"}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="pre-line"
                        as="span"
                        display="-webkit-box"
                        lineHeight="1.2em"
                    >
                        {post.intro?.description}...
                    </Text>
                    <Text>...</Text>
                </Flex>
                <Flex
                    w={"fit-content"}
                    mt={4} px={4} py={2}
                    fontWeight={"semibold"}
                    fontSize={13}
                    border="1px solid"
                    borderColor={"gray.300"}
                    cursor={"pointer"}
                    onClick={() => router.push("/" + post.link)}
                    _hover={{ borderColor: "#9271CE", color: "#9271CE" }}
                >
                    CONTINUE READING
                </Flex>
            </Box>
        </Flex>
    )
}