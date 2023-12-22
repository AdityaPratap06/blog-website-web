import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { map } from "lodash";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { ITEMS } from "../Helper";

export const HeaderMenu = ({ isOpen, onClose }) => {

    return (
        <Drawer w="fit-content" isOpen={isOpen} mr={10} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Blog Website</DrawerHeader>
                <DrawerBody>
                    <Box>
                        {map(ITEMS, item => (
                            <HeaderMenuItem key={item.label} item={item} onClose={onClose} />
                        ))}
                    </Box>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

const HeaderMenuItem = ({ item, onClose }) => {
    const router = useRouter()

    const handleRoute = (url) => {
        router.push(url)
        onClose()
    }

    const [toggleChild, setToggleChild] = useState(null)
    const [toggleSubChild, setToggleSubChild] = useState(null)

    const handleChild = (child) => {
        if (child === toggleChild) {
            setToggleChild(null)
        }
        else {
            setToggleChild(child)
        }
    }

    const handleSubChild = (child) => {
        if (child === toggleSubChild) {
            setToggleSubChild(null)
        }
        else {
            setToggleSubChild(child)
        }
    }

    return (
        <Box>
            <Flex justify={"space-between"} fontWeight={"bold"} onClick={() => item.href ? handleRoute(item.href) : handleChild(item.label)}>
                <Text py={1}>{item.label}</Text>
                <Text>{item.children ? (toggleChild === item.label ? <ChevronUpIcon boxSize={5} /> : <ChevronDownIcon boxSize={5} />) : null}</Text>
            </Flex>
            {item.children?.length && toggleChild === item?.label ?
                map(item.children, child => (
                    <Box key={child.label} pl={5} borderLeft={"2px solid"} borderColor={"gray.400"}>
                        <Flex justify={"space-between"} fontWeight={"semibold"} onClick={() => handleSubChild(child.href)}>
                            <Text py={1}>{child.label}</Text>
                            <Text> {child.children ? (toggleSubChild === child.href ? <ChevronUpIcon boxSize={5} /> : <ChevronDownIcon boxSize={5} />) : null}</Text>
                        </Flex>
                        {child.children?.length && toggleSubChild === child?.href ?
                            map(child.children, c => (
                                <Box key={c.label} pl={5} borderLeft={"2px solid"} borderColor={"gray.400"}>
                                    <Flex justify={"space-between"} onClick={() => handleRoute(c.href)}>
                                        <Text py={1}>{c.label}</Text>
                                    </Flex>
                                </Box>
                            ))
                            :
                            null
                        }
                    </Box>
                ))
                :
                null
            }
        </Box>
    )
}