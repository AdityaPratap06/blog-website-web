import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { SideHeading } from "./SideHeading";

export const Facebook = () => {
    return (
        <Box bg="white" boxShadow={"1px 1px 10px rgba(0, 0, 0, 0.2)"} mt={5}>
            <SideHeading title="Facebook" />
            <Flex p={5}>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftourismandlifestyle&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </Flex>
        </Box>
    )
}