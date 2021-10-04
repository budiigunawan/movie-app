import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container minH='94vh' pt='24'>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
