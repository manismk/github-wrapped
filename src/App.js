import React, { useRef, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Link,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { theme } from './theme';
import axios from 'axios';
import { InputComponent } from './components/InputComponent';
import { Result } from './components/Result';
import { HiDownload } from 'react-icons/hi';
import { exportComponentAsPNG } from 'react-component-export-image';

function App() {
  const inputRef = useRef();
  const resultRef = useRef();
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
        setData(res?.data);
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
        <Box mt="3rem" textAlign="center">
          {data?.username?.length > 0 ? (
            <Box boxShadow="xl">
              <Box p="2rem" pb="0.5rem" bg="#f3f4fa" ref={resultRef}>
                <Result data={data} />
                <Text fontSize="12px" my="6px" textAlign="end">
                  Get Yours @
                  <Link href="https://githubwrapped.netlify.app">
                    githubwrapped.netlify.app
                  </Link>
                </Text>
              </Box>
              <Flex pl="2rem" pb="1rem">
                <IconButton
                  bg="#fff"
                  _hover={{ background: '#fff' }}
                  icon={<HiDownload />}
                  onClick={() =>
                    exportComponentAsPNG(resultRef, {
                      fileName: `Githubwrapped-${data?.username}-2022`,
                    })
                  }
                />
              </Flex>
            </Box>
          ) : (
            <InputComponent
              inputRef={inputRef}
              isLoading={isLoading}
              clickHandler={clickHandler}
              error={error}
              setError={setError}
            />
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
