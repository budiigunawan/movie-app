import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../modules/SearchBar';
import CardMovie from '../modules/CardMovie';
import ModalMovie from '../modules/ModalMovie';

const Home: React.FC = () => {
  const [moviesList, setMoviesList] = React.useState<any[]>([]);
  const [clickedMovie, setClickedMovie] = React.useState<any>({});
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    axios
      .get('http://www.omdbapi.com/?apikey=e2b4f890&s=superman&page=1')
      .then((res) => setMoviesList(res.data?.['Search']))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (movie: any) => {
    setShowModal(true);
    setClickedMovie(movie);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar />
      <Box mt='8'>
        <Grid templateColumns='repeat(2, 1fr)' gap={5} mb='10' mt='6'>
          {moviesList?.map((movie, id) => {
            return (
              <CardMovie key={id} movie={movie} handleClick={handleClick} />
            );
          })}
        </Grid>
      </Box>
      <ModalMovie
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        data={clickedMovie}
      />
    </>
  );
};

export default Home;
