import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f3f4fa',
        color: 'rgb(59, 55, 191)',
        fontFamily: `'inter', sans-serif`,
      },
    },
  },
});
