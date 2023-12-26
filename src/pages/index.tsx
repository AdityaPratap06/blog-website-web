import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from '@/Component/Header/Header';
import { CenterX } from '@/Common/CenterX';
import { AllPosts } from '@/Component/Post/AllPosts';
import { Sidebar } from '@/Component/Sidebar/Sidebar';
import { Footer } from '@/Component/Footer';

export default function Home() {
  return (
    <Box h="100vh">
      <Header />
      <CenterX>
        <Flex w="100%" flexDir={{ base: "column", lg: "row" }}>
          <Box w={{ base: "100%", lg: "65%" }} pr={{ base: 0, lg: 3 }} >
            <AllPosts />
          </Box>
          <Sidebar />
        </Flex>
      </CenterX>
      <Footer />
    </Box>
  )
}
