import React from 'react';
import { Center, Image } from '@chakra-ui/react';

interface CardProps {
  key: number;
  movie: any;
  handleClick: any;
}

const CardMovie = ({ key, movie, handleClick }: CardProps) => {
  return (
    <Center
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      key={key}
      boxShadow='lg'
      mb='5'
      onClick={() => {
        handleClick(movie);
      }}
      _hover={{
        transform: 'translate3d(0px, -8px, 0px)',
        boxShadow: 'rgba(0, 0, 0, 0.22) 0px 19px 43px',
      }}
    >
      <Image src={movie?.Poster} alt={movie?.Title} objectFit='cover' />
    </Center>
  );
};

export default CardMovie;
