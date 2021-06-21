import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import Sightseeingpage from './pages/Sightseeingpage/SightseeingPage'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import { useHistory } from 'react-router-dom'

export default function App() {
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/sightseeing">
          <Sightseeingpage />
        </Route>

        <Route path="/restaurants">
          <RestaurantPage />
        </Route>

        <Route path="/myfavorites">
          <FavoritePage />
        </Route>
      </Switch>

      <Route exact path={['/', '/sightseeing', '/restaurants', '/myfavorites']}>
        <Navigation
          pages={[
            { title: 'Homepage', path: '/' },
            { title: 'Sightseeing', path: '/sightseeing' },
            { title: 'Food&Drinks', path: '/restaurants' },
            { title: 'Favorites', path: '/myfavorites' },
          ]}
        />
      </Route>
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto min-content;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  gap: 20px;
`
