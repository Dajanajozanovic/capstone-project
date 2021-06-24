import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  position: sticky;
  top: 0;
  z-index: 1;
  display: grid;
  width: 100%;
  place-items: center;
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;
  padding: 20px;
  justify-self: center;
  box-shadow: 0 8px 16px #0006;
  font-size: 20px;
  color: grey;
  box-shadow: 3px 3px 8px #656565, -24px -24px 48px #ffffff;
  background-color: whitesmoke;
`
