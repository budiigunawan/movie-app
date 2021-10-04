import React from 'react';
import { Box, Grid, Center, Image } from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../modules/SearchBar';
import CardMovie from '../modules/CardMovie';

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
              <CardMovie key={id} alt={movie?.Title} src={movie?.Poster} />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
