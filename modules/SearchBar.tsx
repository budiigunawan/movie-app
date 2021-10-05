import React from 'react';
import { Text } from '@chakra-ui/react';
import { AsyncPaginate } from 'react-select-async-paginate';
import axios from 'axios';

interface SearchBarProps {
  setKeyword: any;
  keyword: string;
}

const SearchBar = ({ setKeyword, keyword }: SearchBarProps) => {
  const [temp, settemp] = React.useState<string>(keyword);

  const loadMovies = async (
    searchQuery: string,
    loadedOptions: any[],
    { page }: any
  ) => {
    if (!searchQuery) {
      return {
        options: [],
        hasMore: false,
      };
    }

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=e2b4f890&s=*${searchQuery}*&type=movie&page=${page}`
    );

    let tempArray = [
      ...data?.Search.map((item: any) => ({
        label: item.Title,
        value: item.Title,
      })),
    ];

    tempArray = [
      {
        label: temp,
        value: temp,
      },
      ...tempArray,
    ];

    return {
      options: tempArray,
      hasMore: false,
      additional: {
        page: page + 1,
      },
    };
  };

  const handleOption = (tempValue: string) => {
    settemp(tempValue);
    setKeyword(tempValue);
  };

  return (
    <>
      <Text mb='2'>Type Movie Title Here:</Text>
      <AsyncPaginate
        loadOptions={loadMovies as any}
        onChange={(option: any) => {
          handleOption(option?.value);
        }}
        onInputChange={(e) => {
          settemp(e);
        }}
        additional={{
          page: 1,
        }}
        placeholder='search'
        inputValue={temp}
        value={{
          label: keyword,
          value: keyword,
        }}
        isClearable={true}
        isSearchable={true}
      />
    </>
  );
};

export default SearchBar;
