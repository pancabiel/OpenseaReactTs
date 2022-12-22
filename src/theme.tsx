import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
    h6: {
      fontWeight: "bold"
    }
  },
  palette: {
    primary: {
      main: '#181a1b',
    },
    secondary: {
      main: '#00A2A2',
    },
    background: {
      default: '#101010'
    },
    text: {
      primary: '#FFFFFF'
    },
    error: {
      main: red.A400,
    },
  }
});

export default theme;