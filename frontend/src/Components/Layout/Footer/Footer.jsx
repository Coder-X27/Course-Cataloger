import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width={'full'}>
                <Heading children="All Rights Reserved" color={'white'} />
                <Heading children="@Karan Sharma" color={'yellow.400'} fontFamily='body' fontSize={'sm'}/>
            </VStack>
        </Stack>
    </Box>
    )
}

export default Footer