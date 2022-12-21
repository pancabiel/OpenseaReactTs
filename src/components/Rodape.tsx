import styled from "@emotion/styled"
import { Box } from "@mui/system"

function Rodape() {
  return (
    <Box 
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "secondary.main",
      }}>
      <h2>&copy; Copyright Reserved</h2>
    </Box>
  )
}

export default Rodape