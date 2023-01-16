import { Box } from "@mui/system"
import Cabecalho from "./components/Cabecalho"
import ColecoesNovas from "./components/ColecoesNovas"
import Rodape from "./components/Rodape"

function App() {
  return (
    <div>
      <Cabecalho/>
      <Box 
        padding={4}
        paddingLeft={10}
        paddingRight={10}
        >
        <ColecoesNovas/>
      </Box>
      <Rodape/>
    </div>
  )
}

export default App
