import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
    h6: {
      fontWeight: "bold"
    },
    h5: {
      fontWeight: "bold",
      fontSize: 30
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
      primary: '#FFFFFF',
      secondary: '#8A939B'
    },
    error: {
      main: red.A400,
    }
  },
  components: {
  }
});

const componentsTheme = createTheme(theme, {
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          color: 'black'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default
        }
      }
    }
  }
})


export default componentsTheme;