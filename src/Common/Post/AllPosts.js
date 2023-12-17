import { Box } from "@chakra-ui/react";
import React from "react";
import { SinglePost } from "./SinglePost";
import { map } from "lodash";

export const AllPosts = () => {
    const postsData = [1, 2, 3, 4, 5,]
    return (
        <Box >
            {map(postsData, post => (
                <SinglePost post={post} />
            ))}
        </Box>
    )
}