import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
    h6: {
      fontWeight: "bold",
      fontSize: 18
    },
    h5: {
      fontWeight: "bold",
      fontSize: 20
    },
    h4: {
      fontWeight: "bold",
      fontSize: 30
    }
  },
  palette: {
    primary: {
      main: '#101010',
    },
    secondary: {
      main: '#00A2A2',
    },
    background: {
      default: '#181a1b'
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