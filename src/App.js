import React, { useRef, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box mt="7rem" textAlign="center">
          <Heading as="h1" fontSize="48px">
            #GithubWrapped
          </Heading>
          <Text fontSize="20px" fontWeight="600" mt="8px">
            How did you contribute in 2022
          </Text>
          <Text mt="1.5rem">
            Get your Total contriburtion, Active days, longest streak, Most
            active day, month and more
          </Text>
          <InputGroup m="1rem auto" w="20rem">
            <InputLeftElement pointerEvents="none" children={<FaGithub />} />
            <Input
              fontWeight="600"
              outline="0px"
              borderColor="teal.900"
              _focus={{
                borderColor: 'teal.900',
                borderWidth: '2px',
                outline: '0px',
                boxShadow: 'none',
              }}
              _hover={{ borderColor: 'teal.900' }}
              placeholder="Enter your Github Username"
            />
          </InputGroup>
          <Button
            bg="teal.800"
            color="teal.50"
            _hover={{ bg: 'teal.800' }}
            _active={{ bg: 'teal.800' }}
            w="20rem"
          >
            Get My Github Wrapped
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
