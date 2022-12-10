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
import axios from 'axios';

function App() {
  const inputRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const clickHandler = async () => {
    try {
      if (inputRef?.current?.value?.trim()?.length) {
        setLoading(true);
        const res = await axios.post(
          'https://githubwrapped.up.railway.app/',
          {
            username: inputRef?.current?.value?.trim(),
          },
          {
            headers: {
              'x-api-key': process.env.REACT_APP_API,
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        setLoading(false);
        console.log('res', res);
      } else {
        setError('Please Enter valid github username');
        inputRef.current.value = '';
      }
    } catch (e) {
      setLoading(false);
      if (e?.response?.data?.length && e?.response?.status === 422) {
        setError(e?.response?.data);
      }
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
        <Box mt="7rem" textAlign="center">
          <Heading as="h1" fontSize="48px">
            #GithubWrapped
          </Heading>
          <Text fontSize="20px" fontWeight="600" mt="8px">
            How did you contribute in 2022
          </Text>
          <Text mt="5rem">
            Get your Total contriburtion, Active days, longest streak, Most
            active day, month and more
          </Text>
          <InputGroup m="1rem auto" w="20rem">
            <InputLeftElement pointerEvents="none" children={<FaGithub />} />
            <Input
              ref={inputRef}
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
              onChange={() => {
                error && setError(null);
              }}
            />
          </InputGroup>
          {error && (
            <Text color="red.500" fontWeight="500">
              {error}
            </Text>
          )}
          <Button
            mt="1rem"
            bg="teal.800"
            color="white"
            _hover={{ bg: 'teal.800' }}
            _active={{ bg: 'teal.800' }}
            w="20rem"
            onClick={clickHandler}
            isLoading={isLoading}
            loadingText="Getting your contributions..."
          >
            Get My Github Wrapped
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
