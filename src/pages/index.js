
import { Box, Flex } from '@chakra-ui/react';
import { Header } from "../Common/Header/Header";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { CenterX } from '../Common/CenterX';
import { AllPosts } from '../Common/Post/AllPosts';

export default function Home() {
  return (
    <Box h="100vh">
      <Header />
      <CenterX>
        <Flex w="100%" flexDir={{ base: "column", lg: "row" }}>
          <AllPosts />
          <Sidebar />
        </Flex>
      </CenterX>
    </Box>
  )
}
