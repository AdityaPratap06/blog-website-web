import { Box, HStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

export const LoadingContainer = ({
    height = 200,
    loading = false,
    children,
}: any) => {
    return (
        <Box>
            {loading ? (
                <HStack minHeight={height} justify="center" align={'center'}>
                    <Spinner
                        color="defaultColor.900"
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        size="xl" />
                </HStack>
            ) : (
                children
            )}
        </Box>
    );
};