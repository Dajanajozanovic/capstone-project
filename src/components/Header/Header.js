import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h1`
  background: left 10%
    url('https://media.istockphoto.com/photos/curious-seagull-picture-id157195802?k=6&m=157195802&s=612x612&w=0&h=jqll0mLGvmNjx5-PHkBm1465GZ1reesv-mIzmlJaOq0=');
  font-style: oblique 40deg;
  position: sticky;
  top: 0;
  z-index: 1;
  display: grid;
  width: 100%;
  height: 9.5rem;
  place-items: center;
  margin: 0;
  font-size: 1.2em;
  font-weight: 600;
  padding: 20px;
  justify-self: center;
  box-shadow: 0 4px 8px #ffe4e1;
  font-size: 25px;
  color: var(--color-primary);
  box-shadow: 80px 0px 100px #5c6d76, -30px -30px 100px #ffffff;
`
