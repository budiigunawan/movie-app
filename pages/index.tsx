import React from 'react';
import {
  Box,
  Grid,
  Center,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../modules/SearchBar';

const Home: React.FC = () => {
  const [moviesList, setmoviesList] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get('http://www.omdbapi.com/?apikey=e2b4f890&s=superman&page=1')
      .then((res) => setmoviesList(res.data?.['Search']))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <SearchBar />
      <Box mt='8'>
        <Grid templateColumns='repeat(2, 1fr)' gap={5} mb='10' mt='6'>
          {moviesList?.map((movie, id) => {
            return (
              <Center
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                key={id}
                boxShadow='lg'
                mb='5'
                _hover={{
                  transform: 'translate3d(0px, -8px, 0px)',
                  boxShadow: 'rgba(0, 0, 0, 0.22) 0px 19px 43px',
                }}
              >
                <Image
                  src={movie?.Poster}
                  alt={movie?.Title}
                  objectFit='cover'
                />
              </Center>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
