import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { threeDotsCss } from "../Helper";

export const SinglePost = ({ }) => {
    const post = {
        title: "Moti Dungri Temple, Jaipur",
        tag: "Moti Dungri",
        author: "Aditya Pratap Singh",
        authorUrl: "https://www.instagram.com/adityajadon_06/",
        postedAt: new Date(),
        description: `Moti Dungri Temple is a Hindu temple dedicated to the Hindu god Ganesha, the elephant-headed son of Shiva and Parvati. The temple located on a hill called Moti Dungri, which translates to "Pearl Hill, " in the city of Jaipur, Rajasthan, India. It is considered one of the most important temples in the city. The temple was build by the founder of Jaipur - Maharaja Sawai Jai Singh II, in the 18th century. The temple is known for its unique architecture as well as beautiful gardens, which combines elements of Rajasthani and Mughal styles & it is a popular tourist attraction. On the hilltop of the temple, Visitors can enjoy panoramic views of the city. The temple is a popular destination for devotees and tourists alike and is an important part of the cultural and religious heritage of Jaipur.`,
    }

    return (
        <Box mt={5} p={5} w={"100%"} bg="white" align="start" display={"flex"} flexDir={{ base: "column", lg: "row" }} boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} >
            <Image w={{ base: "100%", lg: "35%" }} aspectRatio={16 / 9} objectFit={"cover"} src={"/assets/Ganesh11.jpg"} alt="" />
            <Box ml={{ base: 0, md: 5 }}>
                <Flex my={3} fontSize={{ base: 10, sm: 12, lg: 13 }} color="gray.500" fontStyle={"italic"}>
                    <Text cursor={"pointer"}>{post.tag}</Text>
                    <Text mx={2}>-</Text>
                    <Text cursor={"pointer"}>{post.author}</Text>
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
                        _webkitBoxOrient="vertical"
                        _webkitLineClamp={4}
                    >
                        {post.description}...
                    </Text>
                    <Text>...</Text>
                </Flex>
                <Flex w={"fit-content"} mt={4} px={4} py={2} fontWeight={"semibold"} fontSize={13} border="1px solid" borderColor={"gray.300"} cursor={"pointer"}>CONTINUE READING</Flex>
            </Box>
        </Box>
    )
}