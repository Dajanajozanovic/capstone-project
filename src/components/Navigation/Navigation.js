import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import naviIconsSightseeing from './../../images/naviIcons/sightseeing.png'
import naviIconsRestaurants from './../../images/naviIcons/restaurants.png'
import naviIconsFavorites from './../../images/naviIcons/heart.png'
import naviIconsHome from './../../images/naviIcons/home.png'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink exact to="/" activeClassName="active">
        <img src={naviIconsHome} alt="" />
      </StyledNavLink>
      <StyledNavLink exact to="/sightseeing" activeClassName="active">
        <img src={naviIconsSightseeing} alt="" />
      </StyledNavLink>
      <StyledNavLink exact to="/restaurants" activeClassName="active">
        <img src={naviIconsRestaurants} alt="" />
      </StyledNavLink>
      <StyledNavLink exact to="/myfavorites" activeClassName="active">
        <img src={naviIconsFavorites} alt="" />
      </StyledNavLink>
    </Nav>
  )
}

// export default function Navigation({ pages }) {
//   return (
//     <Nav>
//       {pages.map(({ title, path }) => (
//         <StyledNavLink
//           activeStyle={{ backgroundColor: 'lightpink' }}
//           key={title}
//           exact
//           to={path}
//         >
//           {title}
//         </StyledNavLink>
//       ))}
//     </Nav>
//   )
// }

const Nav = styled.nav`
  height: 4rem;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  img {
    width: 32px;
    height: auto;
  }
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
