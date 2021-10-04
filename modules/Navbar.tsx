import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  IconButton,
  Icon,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';

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
          <Text fontWeight='black' fontSize='lg'>
            Movie App
          </Text>
        </HStack>
        <HStack alignItems='center' spacing='6'>
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
