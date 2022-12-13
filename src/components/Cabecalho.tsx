import { styled, css } from "@stitches/react";
import Logo from "./Logo";

const Header = styled("header", {
  position: "absolute",
  backgroundColor: "$corFundoEscuro",
  width: "100%",
  height: 76,
  paddingLeft: 10,
  display: "flex",
  alignItems: "center"
});

const tituloCentralizado = css({
})

const teste = css({
})


function Cabecalho() {
  return (
  <Header>
    <Logo/>
    <h2 className={ tituloCentralizado() }>Cabeçalho</h2>
  </Header>
  )
}

export default Cabecalho