import React from 'react';
import { useColorModeValue, Text, Center } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <footer>
      <Center bg={useColorModeValue('gray.50', 'gray.700')} h={16}>
        <Text>Created by Budi Indra Gunawan</Text>
      </Center>
    </footer>
  );
};

export default Footer;
