import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrolled = scrollTop / (documentHeight - windowHeight);
        setScrollPercentage(scrolled * 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Flex
            justify="flex-start"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="5px"
            bg="gray.300"
        >
            <Box
                bg="#9271CE"
                height="100%"
                width={`${scrollPercentage}%`}
                transition="width 0.2s ease-in-out"
            />
        </Flex>
    );
};