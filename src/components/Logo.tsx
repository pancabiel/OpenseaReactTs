import { styled } from "@stitches/react";
import logo from "../assets/logo.png"

const ImgLogo = styled('img', {
  height: 50
});

function Logo() {
  return (
      <ImgLogo src={logo}/>
  )
}

export default Logo 