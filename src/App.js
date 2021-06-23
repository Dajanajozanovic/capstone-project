import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import locationsData from './locations.json'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import Sightseeingpage from './pages/Sightseeingpage/SightseeingPage'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import produce from 'immer'

export default function App() {
  const [locations, setLocations] = useState(
    loadFromLocal('locations') ?? locationsData
  )
  const restaurants = locations.filter(
    location => location.type === 'restaurant'
  )
  const sightseeing = locations.filter(
    location => location.type === 'sightseeing'
  )
  const favorites = locations.filter(location => location.isFavorite)

  useEffect(() => {
    saveToLocal('locations', locations)
  }, [locations])

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/sightseeing">
          <Sightseeingpage
            sightseeing={sightseeing}
            handleBookmark={handleBookmark}
          />
        </Route>

        <Route path="/restaurants">
          <RestaurantPage
            restaurants={restaurants}
            handleBookmark={handleBookmark}
          />
        </Route>

        <Route path="/myfavorites">
          <FavoritePage favorites={favorites} handleBookmark={handleBookmark} />
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

  function handleBookmark(id) {
    // const index = locations.findIndex(location => location.id === id)
    // const location = locations[index]

    const nextState = produce(locations, draftState => {
      const location = draftState.find(location => location.id === id)
      location.isFavorite = !location.isFavorite
    })

    setLocations(nextState)

    // setLocations([
    //   ...locations.slice(0, index),
    //   { ...location, isFavorite: !location.isFavorite },
    //   ...locations.slice(index + 1),
    // ])
  }
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
