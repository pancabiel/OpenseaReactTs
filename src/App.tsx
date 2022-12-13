import { createStitches, globalCss } from "@stitches/react"
import Categorias from "./components/Categorias"
import ColecaoDestaque from "./components/ColecaoDestaque"
import ColecoesAlta from "./components/ColecoesAlta"
import ColecoesNovas from "./components/ColecoesNovas"
import Rodape from "./components/Rodape"
import Cabecalho from "./components/Cabecalho"

const globalStyles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
    color: 'White',
    fontFamily: 'Poppins'
  },
  body: {
    backgroundColor: "$corFundo"
  },
  titulo: {
    color: 'Red'
  }
});

export const { styled, css } = createStitches({
  theme: {
    colors: {
      corFundo: '#181a1b',
      corFundoEscuro: '#101010',
      corPrincipal: '#00A2A2'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

const fundo = css({
  backgroundColor: '$corFundo'
});

function App() {
  globalStyles()

  return (
    <div className={fundo()}>
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
