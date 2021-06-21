// import styled from 'styled-components/macro'
// import { NavLink } from 'react-router-dom'

// export default function NavBar() {
//   const active = {
//     fontWeight: '700',
//     backgroundColor: 'darkgrey',
//   }

//   return (
//     <NavBarWrapper>
//       <StyledLink to="/" activeStyle={active}>
//         Home
//       </StyledLink>
//       <StyledLink to="/sightseeing" activeStyle={active}>
//         Sightseeing
//       </StyledLink>
//       <StyledLink to="/restaurants" activeStyle={active}>
//         Food and Drinks
//       </StyledLink>
//       <StyledLink to="/myfavorites" activeStyle={active}>
//         My favorites
//       </StyledLink>
//     </NavBarWrapper>
//   )
// }

// const NavBarWrapper = styled.ul`
//   display: flex;
//   width: 330px;
//   position: fixed;
//   bottom: 0;
//   margin: 0 20px 20px;
//   padding-left: 0;
//   justify-content: space-around;
//   justify-self: center;
//   align-items: center;
//   list-style: none;
//   transform: translateX(-20px);
// `

// const StyledLink = styled(NavLink)`
//   display: flex;
//   text-align: center;
//   align-items: center;
//   justify-content: space-around;
//   height: 60px;
//   width: 100%;
//   text-decoration: none;
//   border-style: none;
//   font-weight: 400;

//   background-color: #cccccc;
//   color: #f6f6f6;
//   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  justify-self: center;
  align-items: center;
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

  width: 80%;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
  &:hover {
    text-decoration: underline;
  }
`
