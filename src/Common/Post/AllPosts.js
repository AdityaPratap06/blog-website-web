import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SinglePost } from "./SinglePost";
import { map } from "lodash";
import { usePostStore } from "@/store/post";

export const AllPosts = () => {
    const postsData = [1, 2, 3, 4, 5,]

    const { getAllPostsAction, getAllPostsStatus, allPostsData } = usePostStore(s => ({
        getAllPostsAction: s.getAllPostsAction,
        getAllPostsStatus: s.getAllPostsStatus,
        allPostsData: s.allPostsData
    }))

    useEffect(() => {
        getAllPostsAction({ page: 1, limit: 10 })
    }, [getAllPostsAction])

    return (
        <Box >
            {map(allPostsData?.data, post => (
                <SinglePost post={post} />
            ))}
        </Box>
    )
}