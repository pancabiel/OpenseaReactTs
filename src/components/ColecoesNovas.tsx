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
import { Colecao } from "../compiler/types";
// import listaColecoes from "../assets/listaColecoes.json"
// import listaColecoes from "../assets/listaColecoes.json" assert { type: 'JSON' };

// import aws from "aws-sdk"
// import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

function ColecoesNovas() {
  var initialized = false;
  // const secretAccessKey = import.meta.env.VITE_APP_S3_SECRET_KEY as string;
  // const accessKeyId = import.meta.env.VITE_APP_S3_ACCESS_KEY as string;
  // const urlS3 = import.meta.env.VITE_APP_S3_URL as string;
  // const region = "sa-east-1" as string;
  // const bucket = "testeopensea";

  // function getData(){
  //   const now = new Date()
  //   return `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate()}`
  // }

  // const getImgColecao = async (idColecao: number) => {
  //   const client = new S3Client({
	//     region,
  //     credentials: {
  //       accessKeyId,
  //       secretAccessKey
  //     }
	//   });

  //   return (await client.send(new GetObjectCommand({ Bucket: bucket, Key: `colecao/${idColecao}.png`}) ))
  // }

  const [colecoes, setColecoes] = useState<Colecao[]>([])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.secondary,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10
  }));

  function getColecoes() {
    Axios.get("https://localhost:7011/Colecao").then(
      (response) => {
        // var list = [response.data[0]] as never[]
        var list = response.data
        setColecoes(list)
      }
    )
  }

  async function getColecoesTeste() {
    let colecoes: Colecao[] = []
    for (let index = 1; index < 6; index++) {
      colecoes.push({id: index, nome: `Teste ${index}`, AutorId: 1})
    }
    setColecoes(colecoes)
  }

  function getImgColecaoLocal(idColecao: number) {
    return (`http://127.0.0.1:8887/colecao/${idColecao}.png`);
  }

  function getImgColecaoTeste() {
    return(cryptopunk)
  }

  useEffect(() => {
    if (!initialized) {
      initialized = true
      // getColecoes()
      getColecoesTeste()
    }
  }, [])

  return (
    <div>
      <Typography
        variant="h4"
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
              <TableRow key={row.id} >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      color="text.secondary"
                      variant="h6"
                      margin={2}
                    > {colecoes.indexOf(row) + 1} </Typography>
                    <Avatar
                      variant="rounded"
                      // src={`${getImgColecaoLocal(row["id"])}`}
                      src={getImgColecaoTeste()}
                      sx={{ width: 70, height: 70, borderRadius: "15%" }} />
                    <Typography
                      variant="h6"
                      margin={2}
                    > {row.nome} </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">{row.AutorId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ColecoesNovas