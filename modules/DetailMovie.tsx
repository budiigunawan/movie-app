import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Image,
  Badge,
} from '@chakra-ui/react';

interface DetailMovieProps {
  data: any;
}

const DetailMovie = ({ data }: DetailMovieProps) => {
  return (
    <Box
      boxShadow='lg'
      p='6'
      rounded='md'
      bg={useColorModeValue('gray.300', 'gray.700')}
    >
      <Grid
        templateRows='repeat(1,1fr)'
        templateColumns='repeat(5,1fr)'
        gap={4}
      >
        <GridItem colSpan={{ base: 5, lg: 2 }}>
          <Image
            w='100%'
            src={data?.Poster}
            alt={data?.Title}
            objectFit='cover'
          />
        </GridItem>
        <GridItem colSpan={{ base: 5, lg: 3 }}>
          <Box
            mt='1'
            fontWeight='bold'
            as='h2'
            fontSize='22px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            {data?.Title}
          </Box>
          <Box
            fontWeight='normal'
            as='p'
            fontSize='16px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            Released Date: {data?.Released}
          </Box>
          <Box
            mt='8'
            fontWeight='bold'
            as='h4'
            fontSize='18px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            Rating: {data?.Ratings[0].Value} · {data?.imdbVotes} votes
          </Box>
          <Box
            mt='10'
            ml='4'
            fontWeight='normal'
            as='p'
            fontSize='16px'
            textAlign='justify'
            lineHeight='tight'
          >
            {data?.Plot}
          </Box>
          <Box
            mt='4'
            fontWeight='semibold'
            as='p'
            fontSize='16px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            Stars:
            {data?.Actors.split(', ').map((star: string) => {
              return <span>{` · ${star}`}</span>;
            })}
          </Box>
          <Box
            mt='2'
            fontWeight='semibold'
            as='p'
            fontSize='16px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            Directors:
            {data?.Director.split(', ').map((director: string) => {
              return <span>{` · ${director}`}</span>;
            })}
          </Box>
          <Box
            mt='2'
            fontWeight='semibold'
            as='p'
            fontSize='16px'
            textAlign='right'
            lineHeight='tight'
            isTruncated
          >
            Writers:
            {data?.Writer.split(', ').map((writer: string) => {
              return <span>{` · ${writer}`}</span>;
            })}
          </Box>
          <Box mt='8' textAlign='right' alignItems='baseline'>
            {data?.Genre.split(', ').map((g: string) => {
              return <Badge ml='2'>{g}</Badge>;
            })}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DetailMovie;
