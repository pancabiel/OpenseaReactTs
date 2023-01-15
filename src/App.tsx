import { Box } from "@mui/system"
import Cabecalho from "./components/Cabecalho"
import ColecoesNovas from "./components/ColecoesNovas"
import Rodape from "./components/Rodape"

function App() {
  return (
    <div>
      <Cabecalho/>
      <Box margin={4}>
        <ColecoesNovas/>
      </Box>
      <Rodape/>
    </div>
  )
}

export default App
