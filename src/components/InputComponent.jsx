import {
  Button,
  Heading,
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
      <Heading mt="3rem" as="h1" fontSize="48px">
        #GithubWrapped
      </Heading>
      <Text fontSize="20px" fontWeight="600" mt="8px">
        How did you contribute in 2022
      </Text>
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
          borderColor="rgb(59, 55, 191)"
          _focus={{
            borderColor: 'rgb(59, 55, 191)',
            borderWidth: '2px',
            outline: '0px',
            boxShadow: 'none',
          }}
          _hover={{ borderColor: 'rgb(59, 55, 191)' }}
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
        bg="rgb(59, 55, 191)"
        color="white"
        _hover={{ bg: 'rgb(59, 55, 191)' }}
        _active={{ bg: 'rgb(59, 55, 191)' }}
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
