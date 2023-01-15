import { Box, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import cryptopunk from "../assets/cryptopunk.png"
import { Avatar } from "@mui/material";
import Axios from "axios"

function ColecoesNovas() {

  const [colecoes, setColecoes] = useState([])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.secondary,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const getColecoes = () => {
    Axios.get("https://localhost:7011/Colecao").then(
      (response) => {
        setColecoes(response.data)
      }
    )
  }

  useEffect(() => {
    getColecoes()
  }, [])

  return (
    <div>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', marginBottom: 20 } }}
      >
        Coleções Novas
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650, 'td, th': { border: 0 } }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coleção</StyledTableCell>
              <StyledTableCell align="right">Preço mínimo</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colecoes.map((row) => (
              <TableRow key={row["nome"]} >
                <TableCell> 
                  <Box sx={{ display: "flex", alignItems: "center"}}>
                    <Typography 
                      color="text.secondary"
                      fontWeight="bold"
                      fontSize={18}
                      margin={2}
                      > {colecoes.indexOf(row) + 1} </Typography>
                    <Avatar 
                      variant="rounded"
                      src={"file:///C:/root/colecao/8.png"}
                      sx={{ width: 70, height: 70, borderRadius:"15%"}}/>
                    <Typography 
                      margin={2}
                      fontWeight="bold"
                      fontSize={18}
                      > {row["nome"]} </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">{row["autorId"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ColecoesNovas