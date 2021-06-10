import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children, uuid }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  display: grid;
  width: 100vw;
  place-items: center;
  padding: 8px;
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;
  padding: 20px;
  justify-self: center;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  box-shadow: 224px 24px 48px #656565, -24px -24px 48px #ffffff;
  border-radius: 31px;
`
