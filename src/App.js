import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import locationsData from './locations.json'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import HomePage from './pages/HomePage/HomePage'
import LocationsPage from './pages/LocationsPage/LocationsPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

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

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Sightseeing', path: '/sightseeing' },
    { title: 'Food & Drinks', path: '/restaurants' },
    { title: 'Favorites', path: '/myfavorites' },
  ]

  useEffect(() => {
    saveToLocal('locations', locations)
  }, [locations])

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage pages={pages} />
        </Route>

        <Route path="/sightseeing">
          <LocationsPage
            title="Sightseeing"
            locations={sightseeing}
            handleBookmark={handleBookmark}
          />
        </Route>

        <Route path="/restaurants">
          <LocationsPage
            title="Food and Drinks"
            locations={restaurants}
            handleBookmark={handleBookmark}
          />
        </Route>

        <Route path="/myfavorites">
          <FavoritePage favorites={favorites} handleBookmark={handleBookmark} />
        </Route>
      </Switch>

      <Route exact path={['/sightseeing', '/restaurants', '/myfavorites']}>
        <Navigation pages={pages} />
      </Route>
    </AppGrid>
  )

  function handleBookmark(id) {
    const index = locations.findIndex(location => location.id === id)
    const location = locations[index]

    setLocations([
      ...locations.slice(0, index),
      { ...location, isFavorite: !location.isFavorite },
      ...locations.slice(index + 1),
    ])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4rem;
  width: 100vw;
  height: 100vh;
`
