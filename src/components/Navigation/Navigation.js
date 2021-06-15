import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  console.log(pages)
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledNavLink = styled(NavLink)`
  padding: 12px;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: white;
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  border-radius: 0;
  width: 80%;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
`
