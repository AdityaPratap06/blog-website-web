import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Popover, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { map } from "lodash";
import { useRouter } from "next/router";
import React from "react";

export const HeaderItem = ({ item }) => {
    const router = useRouter()

    const handleRoute = (url) => {
        router.push(url)
    }

    return (
        <Box>
            <Popover trigger={'hover'} placement={"bottom"} >
                <PopoverTrigger>
                    <Text
                        onClick={() => handleRoute(item?.href)}
                        role="button"
                        aria-haspopup={item?.children ? 'true' : 'false'}
                        aria-expanded={item?.children ? 'true' : 'false'} // Assuming there's a state to manage menu open/close
                    >
                        {item?.label} {item?.children ? <ChevronDownIcon /> : null}
                    </Text>
                </PopoverTrigger>
                <PopoverContent
                    borderTop={'3px solid blue'}
                    w="fit-content"
                    borderRadius={0}
                    boxShadow={'xl'}
                    color="black"
                >
                    {map(item?.children, child => (
                        <Popover key={child.label} trigger={'hover'} placement={"right-start"} >
                            <PopoverTrigger>
                                <Flex px={3} py={2}
                                    fontSize={14}
                                    align={"center"}
                                    cursor={child.children ? "default" : "pointer"}
                                    _hover={{ bg: "black", color: "white" }}
                                    justify={"space-between"}
                                    onClick={() => handleRoute(child.href)}
                                >
                                    <Text mr={10}>{child.label}</Text>
                                    {child.children ?
                                        <ChevronRightIcon />
                                        :
                                        null
                                    }
                                </Flex>
                            </PopoverTrigger>
                            <PopoverContent
                                borderTop={'3px solid blue'}
                                w="fit-content"
                                ml={'-10px'}
                                borderRadius={0}
                                boxShadow={'xl'}
                            >
                                {map(child.children, c => (
                                    <Flex key={c.label} px={3} py={2} fontSize={14}
                                        _hover={{ bg: "black", color: "white" }}
                                        align={"center"}
                                        justify={"space-between"}
                                        cursor={"pointer"}
                                        onClick={() => handleRoute(c.href)}
                                    >
                                        <Text mr={10}>{c.label}</Text>
                                        {/* <ChevronRightIcon /> */}
                                    </Flex>
                                ))}
                            </PopoverContent>
                        </Popover>
                    ))}
                </PopoverContent>
            </Popover>
        </Box>
    )
}
