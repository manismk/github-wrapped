import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'teal.50',
        color: 'teal.700',
        fontFamily: `'inter', sans-serif`,
      },
    },
  },
});
