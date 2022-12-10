import React, { useRef, useState } from 'react';
import { ChakraProvider, Box, Text, Heading } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { theme } from './theme';
import axios from 'axios';
import { InputComponent } from './components/InputComponent';

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
          <InputComponent
            inputRef={inputRef}
            isLoading={isLoading}
            clickHandler={clickHandler}
            error={error}
            setError={setError}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
