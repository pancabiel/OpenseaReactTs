import Categorias from "./components/Categorias"
import ColecaoDestaque from "./components/ColecaoDestaque"
import ColecoesAlta from "./components/ColecoesAlta"
import ColecoesNovas from "./components/ColecoesNovas"
import Rodape from "./components/Rodape"
import Cabecalho from "./components/Cabecalho"
import { Global, css } from "@emotion/react"

export const theme = {
  colors: {
    corFundo: '#181a1b'
  }
}

// const globalStyles = globalCss({
//   '*': { 
//     margin: 0,
//     padding: 0,
//     color: 'White',
//     fontFamily: 'Poppins'
//   },
//   body: {
//     backgroundColor: "$corFundo"
//   },
//   titulo: {
//     color: 'Red'
//   }
// });

// export const { styled, css } = createStitches({
//   theme: {
//     colors: {
//       corFundo: '#181a1b',
//       corFundoEscuro: '#101010',
//       corPrincipal: '#00A2A2'
//     },
//   },
// });

function App() {

  return (
    <div>
      <Global 
      styles={{
        '*': {
          color: 'white'
        },
        body: {
          backgroundColor: theme.colors.corFundo
        }
      }}
      />
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
