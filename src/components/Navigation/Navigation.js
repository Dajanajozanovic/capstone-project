import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, path }) => (
        <StyledNavLink key={title} to={path}>
          {title}
        </StyledNavLink>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  justify-items: center;
`

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 16px 6px;
  border: none;
  color: grey;
  text-decoration: none;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
  &:hover {
    background-color: lightpink;
  }
`
