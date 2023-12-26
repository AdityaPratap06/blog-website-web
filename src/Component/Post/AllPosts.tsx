import { Box, Flex, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { map } from "lodash";
import { usePostStore } from "@/store/post";
import { useRouter } from "next/router";
import { STATUS } from "@/Common/Helper";
import { SinglePost } from "./SinglePost";
import { EmptyBox } from "@/Common/EmptyBox";

export const AllPosts = () => {
    const { query } = useRouter()

    const { getAllPostsAction, getAllPostsStatus, allPostsData } = usePostStore((s: any) => ({
        getAllPostsAction: s.getAllPostsAction,
        getAllPostsStatus: s.getAllPostsStatus,
        allPostsData: s.allPostsData
    }))

    useEffect(() => {
        getAllPostsAction({ page: 1, limit: 10, ...query })
    }, [getAllPostsAction, query])

    return (
        <Box >
            {getAllPostsStatus === STATUS.FETCHING ?
                <SkeletonLoading />
                : allPostsData?.data?.length ?
                    map(allPostsData?.data, post => (
                        <SinglePost key={post._id} post={post} />
                    ))
                    :
                    <EmptyBox title="No Post Found" />
            }
        </Box>
    )
}

const SkeletonLoading = () => {
    return (
        <Box mt={5} p={5} w={"100%"} bg="white" cursor={"default"} display={"flex"} flexDir={{ base: "column", lg: "row" }} boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"}>
            <Skeleton w={{ base: "100%", lg: "35%" }} h={{ base: 190 }} border={"1px solid red"} />
            <Flex ml={{ base: 0, md: 5 }} w={{ base: "100%", lg: "60%" }} flexDir={"column"} align="start">
                <Skeleton h={6} w="100%" />
                <Flex pb={2} w="100%" align={"center"} justify={"space-between"}>
                    <SkeletonText noOfLines={1} w={"27%"} />
                    <Text>-</Text>
                    <SkeletonText noOfLines={1} w={"27%"} />
                    <Text>-</Text>
                    <SkeletonText noOfLines={1} w={"27%"} />
                </Flex>
                <SkeletonText w="100%" textAlign={"start"} noOfLines={4} skeletonHeight='3' />
                <Skeleton w={160} mt={4} h={9} />
            </Flex>
        </Box>
    )
}