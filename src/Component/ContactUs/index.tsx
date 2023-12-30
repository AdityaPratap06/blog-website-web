import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GetInTouch } from "./GetInTouchForm";

export const ContactUs = () => {
    return (
        <Box>
            <Flex flexDir={"column"} align={"start"}>
                <Breadcrumb mt={5} spacing='3px' color={"gray.500"} fontSize={14} separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Contact Us</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Heading mt={5} as={"h1"} fontSize={26} fontWeight={"semibold"} textAlign={"start"}>Contact Us</Heading>

                <Text mt={5}>
                    We&apos;d love to hear from you! Whether you have a question about our services, want to provide feedback, or just want to say hello, we&apos;re here and ready to assist you.
                </Text>
                <Text mt={2}>
                    Please feel free to reach out to us using the contact information below or fill out the form, and we&apos;ll get back to you as soon as possible.
                </Text>
                <GetInTouch />
            </Flex>
        </Box>
    )
}