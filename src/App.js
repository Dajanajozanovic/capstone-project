import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import locationsData from './locations.json'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import HomePage from './pages/HomePage/HomePage'
import LocationsPage from './pages/LocationsPage/LocationsPage'
import restructureLocation from './services/restructureLocation'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

const fsqId = process.env.REACT_APP_ID_FSQ
const fsqKey = process.env.REACT_APP_KEY_FSQ

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

  useEffect(() => {
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${fsqId}&client_secret=${fsqKey}&v=20180323&near=hamburg&limit=10&query=`
    const query = 'restaurants'

    fetch(url + query)
      .then(res => res.json())
      .then(data => {
        const rawLocations = data.response.groups[0].items
        const newLocations = rawLocations.map(restructureLocation)
        console.log(newLocations)
      })

      .catch(error => console.error(error))
  }, [])

  // useEffect(() => {
  //   const url = `https://api.foursquare.com/v2/venues/565efbec38fa8b3886dece3e/photos?client_id=${fsqId}&client_secret=${fsqKey}&v=20180323`

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error))
  // }, [])

  // useEffect(() => {

  //   fetch(
  //     'api.openweathermap.org/data/2.5/weather?id={hamburg}&appid={31ff56faf98e6f2ffca96d94ef3aa13a}'
  //   )
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error))
  // }, [])

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
  background-image: url('https://images.unsplash.com/photo-1560158220-84217e289b76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhbWJ1cmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60');
`
