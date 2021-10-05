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
  const [noData, setNoData] = React.useState<boolean>(false);
  // const [loadingMoreData, setLoadingMoreData] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [bufferMovieList, setBufferMovieList] = React.useState<any[]>([]);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        const currentCounter: number = moviesList?.length;
        const maxMovie: number = page * 10;
        if (!noData && currentCounter < maxMovie) {
          const tempArray = [...moviesList, ...bufferMovieList];
          setMoviesList(tempArray);
        }
      }
    };
  }

  React.useEffect(() => {
    axios
      .get(
        'http://www.omdbapi.com/?apikey=e2b4f890&s=superman&type=movie&page=1'
      )
      .then((res) => {
        const rawList: any[] = res.data?.['Search'];
        const slicedArray = rawList.slice(0, 5);
        setMoviesList([...slicedArray, ...bufferMovieList]);
        const restArray = rawList.slice(5, 10);
        setBufferMovieList(restArray);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    if (keyword) {
      handleSearch();
    }
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
          `http://www.omdbapi.com/?apikey=e2b4f890&s=*${keyword}*&type=movie&page=${page}`
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
      <SearchBar setKeyword={setKeyword} keyword={keyword} />
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
