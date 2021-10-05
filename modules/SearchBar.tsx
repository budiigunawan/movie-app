import React from 'react';
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';

interface SearchBarProps {
  handleSearch: any;
  setKeyword: any;
  keyword: string;
}

const SearchBar = ({ handleSearch, setKeyword, keyword }: SearchBarProps) => {
  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const handleClear = () => {
    setKeyword('');
  };

  return (
    <InputGroup size='md' boxShadow='md'>
      <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}
      />
      <Input
        type='text'
        value={keyword}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        pr='4.5rem'
        placeholder='Type movie title here'
      />
      {keyword?.length && (
        <InputRightElement>
          <IconButton
            variant='ghost'
            aria-label='Clear'
            bg={'red.300'}
            color={'whitesmoke'}
            icon={<SmallCloseIcon />}
            onClick={handleClear}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchBar;
