import * as React from 'react';
import { NavBar } from 'app/components/NavBar';
import { Container } from '@chakra-ui/react';

export function homepage() {
  return (
    <>
      <Container maxW="1200px" height="100vh">
        <NavBar />
      </Container>
    </>
  );
}
