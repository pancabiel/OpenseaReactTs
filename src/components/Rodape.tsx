import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Avatar } from "@mui/material";
import facebook from "../assets/facebook_icon.png"
import github from "../assets/github_icon.png"
import linkedin from "../assets/linkedin_icon.png"
import mail from "../assets/mail_icon.png"
import whats from "../assets/whats_icon.png"

const redesSociais = [ facebook, linkedin, github, mail, whats ]
const botaoRedeSocial = (img: any) => {
  return (
    <Button
      variant="contained"
      key={img}
      sx={{height: 50, width: 50, minWidth: 0, borderRadius:"15%"}}
      >
        <Avatar 
          src={img}
          sx={{ height: 30, width: 30, borderRadius:"0%" }}
          />
    </Button>
  )
}

function Rodape() {
  return (
    <Box 
      sx={{
        width: "100%",
        position: "relative",
        bottom: 0,
        backgroundColor: "secondary.main",
        padding: 4,
        paddingLeft: 20,
        paddingRight: 20
      }}>
      <Grid 
        container
        spacing={2}
        >
        <Grid item xs={12} md={4}>
          <Typography variant="h5">OpenSea</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h5">Mercado</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h5">Conta</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h5">Contato</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box>
            <>{redesSociais.map(botaoRedeSocial)}</>
          </Box>
        </Grid>
      </Grid>
      <Typography
        fontSize={14}
        marginTop={4}
        >
        &copy; 2022-2023 Pancabiel, Inc
      </Typography>
    </Box>
  )
}

export default Rodape