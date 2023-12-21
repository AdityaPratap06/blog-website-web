import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const EmptyBox = (props) => {
    const { icon, desc, title, buttonClickHandler, buttonTitle } = props;

    return (
        <Box
            bg="white"
            borderRadius={10}
            py={{ base: 10, md: 14, lg: 10 }}
            px={{ base: 10, md: 14, lg: 8 }}
        >
            <Center>
                <Image alt="empty" w={{ lg: 250 }} src="/assets/noDataFound.jpg" />
            </Center>
            <Box textAlign="center" mt={-2}>
                <Center>
                    <Box>
                        <Box mr={2}>{icon}</Box>
                        <Heading fontSize={"large"}>{title || "nothing found"}</Heading>
                        <Text mt={2} color="gray.400" fontSize={15}>
                            {desc}
                        </Text>
                    </Box>
                </Center>
            </Box>
            {buttonClickHandler && (
                <Center>
                    <Button
                        onClick={buttonClickHandler}
                        mt={10}
                        size="md"
                        variant={"outline"}
                        colorScheme="defaultColor"
                    >
                        {buttonTitle || "Add"}
                    </Button>
                </Center>
            )}
        </Box>
    );
};
