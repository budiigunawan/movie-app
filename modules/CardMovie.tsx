import React from 'react';
import { Center, Image } from '@chakra-ui/react';

interface CardProps {
  key: number;
  src: string;
  alt: string;
}

const CardMovie = ({ key, src, alt }: CardProps) => {
  return (
    <Center
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      key={key}
      boxShadow='lg'
      mb='5'
      _hover={{
        transform: 'translate3d(0px, -8px, 0px)',
        boxShadow: 'rgba(0, 0, 0, 0.22) 0px 19px 43px',
      }}
    >
      <Image src={src} alt={alt} objectFit='cover' />
    </Center>
  );
};

export default CardMovie;
