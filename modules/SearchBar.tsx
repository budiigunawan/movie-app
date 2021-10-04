import React from 'react';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';

const SearchBar: React.FC = () => {
  return (
    <InputGroup size='md'>
      <Input type='text' pr='4.5rem' placeholder='Superman' />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm'>
          search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
