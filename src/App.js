import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import Sightseeingpage from './pages/Sightseeingpage/SightseeingPage'

export default function App() {
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage pageName="homepage" />
        </Route>

        <Route path="/sightseeing">
          <Sightseeingpage pageName="sightseeing" />
        </Route>

        <Route path="/restaurants">
          <RestaurantPage pageName="restaurants" />
        </Route>
      </Switch>

      <Route exact path={['/', '/sightseeing', '/restaurants']}>
        <Navigation
          pages={[
            { title: 'Homepage', path: '/' },
            { title: 'Sightseeing', path: '/sightseeing' },
            { title: 'Food & Drinks', path: '/restaurants' },
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
