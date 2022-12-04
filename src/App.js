import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Hello world
      </Box>
    </ChakraProvider>
  );
}

export default App;
