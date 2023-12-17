import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const UsefulLinks = () => {
    return (
        <Box>
            <Text fontWeight={"bold"} fontSize={16}>Useful Links</Text>

            <Box mt={4}>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Privacy Policy</Text>
                <Text>Disclamer</Text>
            </Box>
        </Box>
    )
}