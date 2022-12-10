import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const InputComponent = ({
  inputRef,
  clickHandler = () => {},
  isLoading = false,
  error = null,
  setError = () => {},
}) => {
  return (
    <>
      <Text mt="5rem">
        Get your Total contriburtion, Active days, longest streak, Most active
        day, month and more
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
    </>
  );
};
