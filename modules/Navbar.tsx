import React from 'react';
import { Box, Flex, HStack, useColorModeValue, Text } from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';
import NextLink from 'next/link';

const Navbar: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.700')}
      px={4}
      position='fixed'
      top={0}
      boxShadow='base'
      zIndex='banner'
      w='full'
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={2} alignItems={'center'}>
          <NextLink href='/' as={`/`}>
            <Text fontWeight='black' fontSize='lg'>
              Movie App
            </Text>
          </NextLink>
        </HStack>
        <HStack alignItems='center' spacing='6'>
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
