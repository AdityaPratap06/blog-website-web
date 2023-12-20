import { usePostStore } from "../../store/post";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LoadingContainer } from "../LoadingContainer";
import { STATUS } from "../Helper";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { map } from "lodash";
import { LiaFacebookF, LiaLinkedinIn, LiaWhatsapp } from "react-icons/lia"
import { AiOutlineMail } from "react-icons/ai"

export const Blog = ({ link }: any) => {
    const router = useRouter();

    const { getPostAction, getPostStatus, postData } = usePostStore((s: any) => ({
        getPostAction: s.getPostAction,
        getPostStatus: s.getPostStatus,
        postData: s.postData
    }));

    useEffect(() => {
        getPostAction({ link })
    }, [getPostAction, link]);

    return (
        <Box>
            <LoadingContainer loading={getPostStatus === STATUS.FETCHING}>
                {postData ?
                    <Flex flexDir={"column"} align={"start"}>
                        <Flex flexDir={"column"} align={"start"}>
                            <Breadcrumb mt={5} spacing='3px' color={"gray.500"} fontSize={14} separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href={"/?category:" + postData.category.id}>{postData.category.label}</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href='#'>{postData.title}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <Heading mt={5} as={"h1"} fontSize={26} fontWeight={"semibold"}>{postData.title}</Heading>
                            <Flex py={2} fontSize={{ base: 10, sm: 12, lg: 13 }} color="gray.500" fontStyle={"italic"}>
                                <Text cursor={"pointer"}>{postData.tags?.[0]}</Text>
                                <Text mx={2}>-</Text>
                                <Text cursor={"pointer"} _hover={{ color: "gray.900" }} onClick={() => window.open(postData.author.url)}>{postData.author?.name}</Text>
                                <Text mx={2}>-</Text>
                                <Text>{dayjs(postData.postedAt).format("MMMM DD, YYYY")}</Text>
                            </Flex>
                            {map(postData.posts, post => (
                                <Flex mt={3} flexDir={"column"} align={"start"}>
                                    {post.heading ? <Text fontSize={20} fontWeight={"bold"}>{post.heading}</Text> : null}
                                    {post.subHeading ? <Text fontSize={14} fontWeight={"semibold"}>{post.subHeading}</Text> : null}
                                    <Text mt={3} align={"justify"}>{post.description}</Text>
                                </Flex>
                            ))}
                            <Flex mt={5} mb={10} fontWeight={"bold"} fontSize={20}>
                                <Text>by:</Text>
                                <Text ml={2}>{postData.author.name}</Text>
                            </Flex>
                        </Flex>
                        <Flex flexDir={"column"} align={"start"}>
                            <Flex my={3} fontSize={12} flexWrap={"wrap"}>
                                <Text mt={2} mr={1} px={3} pb={1} bg="black" color="white">Tags</Text>
                                {map(postData.tags, tag => (
                                    <Text mt={2} mr={1} px={3} pb={1} bg={"#F2F2F2"} color={"#9271CE"} cursor={"pointer"} _hover={{ bg: "black", color: "white" }}>{tag}</Text>
                                ))}
                            </Flex>
                            <Grid mt={3} templateColumns='repeat(5, 1fr)' gap={2} color="white">
                                <GridItem w='100%' py={2} px={7} bg='blue.700'><LiaFacebookF /></GridItem>
                                <GridItem w='100%' py={2} px={7} bg='green.400'><LiaWhatsapp /></GridItem>
                                <GridItem w='100%' py={2} px={7} bg='blue.600'><LiaLinkedinIn /></GridItem>
                                <GridItem w='100%' py={2} px={7} bg='gray.500'><AiOutlineMail /></GridItem>
                            </Grid>
                        </Flex>
                    </Flex>
                    :
                    null
                }
            </LoadingContainer>
        </Box>
    )
}