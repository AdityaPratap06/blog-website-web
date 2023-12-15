import { Box } from "@chakra-ui/react";
import React from "react";
import { FollowUs } from "./FollowUs";
import { PopularPosts } from "./PopularPosts";
import { Facebook } from "./Facebook";

export const Sidebar = () => {
    return (
        <Box w={{ base: "100%", md: "30%" }} pl={{ base: 0, md: 3 }} >
            <FollowUs />
            <PopularPosts />
            {/* <Facebook /> */}
        </Box>
    )
}