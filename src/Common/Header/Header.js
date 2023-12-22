import { Box, Flex, Grid, GridItem, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuItem, MenuList, Portal, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { HeaderTop } from "./HeadetTop";

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { HeaderItem } from "./HeaderItem";
import { map } from "lodash";
import { ITEMS } from "../Helper";
import { HeaderMenu } from "./HeaderMenu";
import { useRouter } from "next/router";
import { CenterX } from "../CenterX";

export const Header = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputData, setInputData] = useState()

    const handleSearch = () => {
        router.push("/?search=" + inputData)
    }
    return (
        <Box>
            <HeaderTop />
            <CenterX>
                <Box w="100%">
                    <Flex w="100%" py={5} flexDir={{ base: "column", md: "row" }} justify={{ base: "center", md: "space-between" }} align={"center"}>
                        <Box w="30%" h="80px">
                            <Image src={"/assets/logo.png"} alt="logo" />
                        </Box>
                        <Flex w={{ base: "100%", md: "50%" }} mt={{ base: 5, md: 0 }} justify={"center"}>
                            <IconButton display={{ base: "initial", md: "none" }} icon={<HamburgerIcon />} mr={10} onClick={onOpen} />
                            <InputGroup size='md' _focus={"none"}>
                                <InputLeftAddon><SearchIcon /></InputLeftAddon>
                                <Input _focus={"none"} placeholder='Search here' onChange={(e) => setInputData(e.target.value)} />
                                <InputRightAddon as={"Button"} onClick={handleSearch}>Search</InputRightAddon>
                            </InputGroup>
                        </Flex>
                    </Flex>
                    <Grid display={{ base: "none", md: "grid" }} templateColumns={`repeat(${ITEMS?.length}, 1fr)`} gap={0} color="white" fontWeight={"semibold"}>
                        {map(ITEMS, item => (
                            <GridItem key={item.label} w='100%' py={2} bg='gray.600' borderLeft="1px solid" cursor={"pointer"} borderColor={"gray.500"}>
                                <HeaderItem item={item} />
                            </GridItem>
                        ))}
                    </Grid>
                    <HeaderMenu isOpen={isOpen} onClose={onClose} />
                </Box>
            </CenterX>
        </Box>
    )
}