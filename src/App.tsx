import Categorias from "./components/Categorias"
import ColecaoDestaque from "./components/ColecaoDestaque"
import ColecoesAlta from "./components/ColecoesAlta"
import ColecoesNovas from "./components/ColecoesNovas"
import Rodape from "./components/Rodape"
import Cabecalho from "./components/Cabecalho"
import { createTheme, CssBaseline } from "@mui/material"

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
      main: '#101010'
    },
    secondary: {
      main: '#00A2A2'
    },
    text: {
      primary: '#ffffff'
    },
    background: {
      default: '#181a1b'
    }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: 30,
          paddingRight: 30
        }
      }
    }
  }
})

function App() {

  return (
      <div>
        <CssBaseline />
        <Cabecalho />
        <ColecaoDestaque />
        <ColecoesNovas />
        <Categorias />
        <ColecoesAlta />
        <Rodape />
      </div>
  )
}

export default App
