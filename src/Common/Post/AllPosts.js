import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SinglePost } from "./SinglePost";
import { map } from "lodash";
import { usePostStore } from "@/store/post";
import { LoadingContainer } from "../LoadingContainer";
import { STATUS } from "../Helper";
import { useRouter } from "next/router";
import { EmptyBox } from "../EmptyBox";

export const AllPosts = () => {
    const { query } = useRouter()

    const { getAllPostsAction, getAllPostsStatus, allPostsData } = usePostStore(s => ({
        getAllPostsAction: s.getAllPostsAction,
        getAllPostsStatus: s.getAllPostsStatus,
        allPostsData: s.allPostsData
    }))

    useEffect(() => {
        getAllPostsAction({ page: 1, limit: 10, ...query })
    }, [getAllPostsAction, query])

    return (
        <Box >
            <LoadingContainer loading={getAllPostsStatus === STATUS.FETCHING}>
                {allPostsData?.data?.length ?
                    map(allPostsData?.data, post => (
                        <SinglePost post={post} />
                    ))
                    :
                    <EmptyBox title="No Post Found" />
                }
            </LoadingContainer>
        </Box>
    )
}