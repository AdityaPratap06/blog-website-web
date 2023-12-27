import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { SideHeading } from "./SideHeading";

export const FacebookPost = () => {
    return (
        <Box bg="white" boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} mt={5}>
            <SideHeading title="Facebook Post" />
            <Flex w="100%" h="255px" p={5} flexDir={"column"} align={"center"}>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthebloggingbuzz%2Fposts%2Fpfbid02CsxQsVyLzsZm4HmXy2uEb9ZgTLyASbx6ituMu9S7dJsXbURJKQqgVonGV62FaZw4l&show_text=true&width=500" width="100%" height="333" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </Flex>
        </Box>
    )
}