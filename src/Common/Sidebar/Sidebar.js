import { Box } from "@chakra-ui/react";
import React from "react";
import { FollowUs } from "./FollowUs";
import { PopularPosts } from "./PopularPosts";
import { Facebook } from "./Facebook";

export const Sidebar = () => {
    return (
        <Box w={{ base: "100%", lg: "35%" }} pl={{ base: 0, lg: 3 }} >
            <FollowUs />
            <PopularPosts />
            {/* <Facebook /> */}
        </Box>
    )
}