import React, { useRef, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './theme';
import axios from 'axios';
import { InputComponent } from './components/InputComponent';
import { Result } from './components/Result';

function App() {
  const inputRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    actualName: '',
    totalCount: 4,
    dayWiseCount: {
      sunday: 1,
      monday: 1,
      tuesday: 1,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 1,
    },
    monthWiseCount: {
      january: 2,
      febuaray: 1,
      march: 0,
      april: 0,
      may: 1,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
    maxCount: {
      count: 1,
      date: '2022-01-18',
    },
    maxMonthCount: {
      count: 2,
      month: 'january',
    },
    maxDayCount: {
      count: 1,
      day: 'sunday',
    },
    activeDaysCount: 4,
    longestStreak: {
      streak: 1,
      count: 0,
    },
    userImgUrl: 'https://avatars.githubusercontent.com/u/82753675?v=4',
  });
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
        <Box mt="5rem" textAlign="center">
          {data?.username?.length > 0 ? (
            <Box boxShadow="xl" p="2rem">
              <Result data={data} />
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
