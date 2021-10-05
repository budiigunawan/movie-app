import React from 'react';
import { Box, Grid, Center, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import SearchBar from '../modules/SearchBar';
import CardMovie from '../modules/CardMovie';
import ModalMovie from '../modules/ModalMovie';

const Home: React.FC = () => {
  const [moviesList, setMoviesList] = React.useState<any[]>([]);
  const [clickedMovie, setClickedMovie] = React.useState<any>({});
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [keyword, setKeyword] = React.useState<string>('');

  React.useEffect(() => {
    axios
      .get(
        'http://www.omdbapi.com/?apikey=e2b4f890&s=superman&type=movie&page=1'
      )
      .then((res) => {
        setMoviesList(res.data?.['Search']);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    handleSearch();
  }, [keyword]);

  const handleClick = (movie: any) => {
    setShowModal(true);
    setClickedMovie(movie);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = async () => {
    if (keyword) {
      try {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=e2b4f890&s=*${keyword}*&type=movie&page=1`
        );
        setMoviesList(data?.Search);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('please insert movie title');
    }
  };

  return (
    <>
      <SearchBar
        // handleSearch={handleSearch}
        setKeyword={setKeyword}
        keyword={keyword}
      />
      <Box mt='8'>
        <Center>
          {moviesList && !loading ? (
            <Grid templateColumns='repeat(2, 1fr)' gap={5} mb='10' mt='6'>
              {moviesList?.map((movie, id) => {
                return (
                  <CardMovie key={id} movie={movie} handleClick={handleClick} />
                );
              })}
            </Grid>
          ) : (
            <Spinner size='lg' />
          )}
        </Center>
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
