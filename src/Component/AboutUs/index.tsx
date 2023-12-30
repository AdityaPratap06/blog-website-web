import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const AboutUs = () => {
    return (
        <Box>
            <Flex flexDir={"column"} align={"start"}>
                <Breadcrumb mt={5} spacing='3px' color={"gray.500"} fontSize={14} separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>About Us</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Heading mt={5} as={"h1"} fontSize={26} fontWeight={"semibold"} textAlign={"start"}>About Us</Heading>

                <Text mt={5} fontSize={22} fontWeight={"semibold"} color={"shade2"}>Welcome to The Blogging Buzz!</Text>
                <Text textAlign={"justify"}>At The Blogging Buzz, we believe in the transformative power of travel. We&apos;re a passionate team of adventurers, storytellers, and travel enthusiasts dedicated to sharing our experiences and inspiring others to embark on their own journeys of discovery.</Text>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>Our Beginnings:</Text>
                <Text textAlign={"justify"}>It all started with a shared love for exploring the world. What began as individual adventures quickly turned into a collective vision—to create a platform where we could share our travel tales, insider tips, and meaningful encounters with fellow wanderers.</Text>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>Our Mission:</Text>
                <Text textAlign={"justify"}>Our mission is simple yet profound: to ignite the wanderlust within you. Through vivid narratives, captivating photography, and practical guidance, we strive to spark your imagination, encourage exploration, and facilitate authentic connections with diverse cultures and places.</Text>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>What We Offer:</Text>
                <UnorderedList gap={3}>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Inspirational Stories:</b> Dive into our collection of captivating stories that transport you to remote corners of the globe, offering insights, tips, and a glimpse into unique cultures.</Text>
                    </ListItem>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Expert Guides:</b> Benefit from our firsthand experiences with comprehensive guides tailored to help you plan your trips efficiently, from packing tips to hidden gems off the beaten path.</Text>
                    </ListItem>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Community Engagement:</b> Join a thriving community of travelers who share their experiences, insights, and advice, fostering a space for meaningful discussions and shared wanderlust.</Text>
                    </ListItem>
                </UnorderedList>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>Our Values:</Text>
                <UnorderedList gap={3}>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Authenticity:</b> We believe in authentic experiences and honest, unbiased recommendations to enhance your travel ventures.</Text>
                    </ListItem>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Responsible Travel:</b> Respect for cultures, environments, and communities is at the core of what we do. We advocate for sustainable and responsible travel practices.</Text>
                    </ListItem>
                    <ListItem>
                        <Text textAlign={"justify"}><b>Diversity and Inclusivity:</b> We celebrate diversity and aim to create a welcoming space for travelers of all backgrounds, beliefs, and identities.</Text>
                    </ListItem>
                </UnorderedList>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>Meet the Team:</Text>
                <Text>Behind every adventure shared on [Travel Blog Name] is a team of passionate individuals with diverse backgrounds, united by their love for exploration and storytelling. Learn more about our team [here](link to team page).</Text>

                <Text mt={5} fontSize={18} fontWeight={"semibold"} color={"shade3"}>Join Us:</Text>
                <Text>Embark on this journey with us! Whether you&apos;re an experienced globetrotter or planning your first trip, we invite you to join our community, share your stories, and explore the world through our lens.</Text>

                <Text my={5}>Thank you for being part of our travel family!</Text>
            </Flex >
        </Box >
    )
}