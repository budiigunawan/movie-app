import React from 'react';
import {
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
  Image,
  Badge,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface ModalProps {
  showModal: boolean;
  handleCloseModal: any;
  data: any;
}

const ModalMovie = ({ showModal, handleCloseModal, data }: ModalProps) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={handleCloseModal}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>
            {data?.Title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Image src={data?.Poster} alt={data?.Title} />
          </Center>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} mb='4' mt='4'>
            <Text
              textAlign={'center'}
              fontSize={{ base: '14px', md: '16px', lg: '18px' }}
            >
              Year: {data?.Year}
            </Text>
            <Center>
              <Badge
                borderRadius='full'
                px='4'
                colorScheme='teal'
                textAlign={'center'}
              >
                {data?.Type}
              </Badge>
            </Center>
            <Center>
              <NextLink href='/detail/[id]' as={`/detail/${data?.imdbID}`}>
                <Button
                  colorScheme='blue'
                  type='button'
                  variant='solid'
                  size='sm'
                  ml={2}
                >
                  more info
                </Button>
              </NextLink>
            </Center>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalMovie;
