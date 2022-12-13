import { styled, css } from '@stitches/react';

const Footer = styled('footer', {
  position: 'absolute',
  backgroundColor: '$corPrincipal',
  width: '100%',
  height: 150,
  bottom: 0
});


function Rodape() {
  return (
    <Footer>
      <h2>&copy; Copyright Reserved</h2>
    </Footer>
  )
}

export default Rodape