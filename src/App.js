import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import HomePage from './pages/HomePage/HomePage'
import LocationsPage from './pages/LocationsPage/LocationsPage'
import restructureLocation from './services/restructureLocation'
// import { loadFromLocal, saveToLocal } from './utils/localStorage'

const fsqId = process.env.REACT_APP_ID_FSQ
const fsqKey = process.env.REACT_APP_KEY_FSQ

export default function App() {
  const [sightseeing, setSightseeing] = useState([])
  const [restaurants, setRestaurants] = useState([])
  // const [locations, setLocations] = useState([])
  const [query, setQuery] = useState('restaurants')

  const sightseeingFavorites = sightseeing.filter(
    location => location.isFavorite
  )
  const restaurantFavorites = restaurants.filter(
    location => location.isFavorite
  )
  const favorites = [...sightseeingFavorites, ...restaurantFavorites]
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Sightseeing', path: '/sightseeing' },
    { title: 'Food & Drinks', path: '/restaurants' },
    { title: 'Favorites', path: '/myfavorites' },
  ]

  // useEffect(() => {
  //   saveToLocal('locations', locations)
  // }, [locations])

  //restaurants
  useEffect(() => {
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${fsqId}&client_secret=${fsqKey}&v=20180323&near=hamburg&limit=20&query=`

    fetch(url + query)
      .then(res => res.json())
      .then(data => {
        const rawLocations = data.response.groups[0].items
        const newLocations = rawLocations.map(restructureLocation)
        console.log(newLocations)
        setRestaurants(newLocations)
      })
      .catch(error => console.error(error))
  }, [query])

  //  sightseeing
  useEffect(() => {
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${fsqId}&client_secret=${fsqKey}&v=20180323&near=hamburg&limit=50&query=`
    const query = 'Denkmal'

    fetch(url + query)
      .then(res => res.json())
      .then(data => {
        const rawLocations = data.response.groups[0].items
        const newLocations = rawLocations.map(restructureLocation)
        setSightseeing(newLocations)
      })
      .catch(error => console.error(error))
  }, [])

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
            handleBookmark={handleBookmarkSightseeing}
          />
        </Route>

        <Route path="/restaurants">
          <LocationsPage
            title="Food and Drinks"
            locations={restaurants}
            handleBookmark={handleBookmarkRestaurants}
            setQuery={setQuery}
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
    handleBookmarkRestaurants(id)
    handleBookmarkSightseeing(id)
  }

  function handleBookmarkRestaurants(id) {
    const index = restaurants.findIndex(restaurant => restaurant.id === id)
    if (index !== -1) {
      setRestaurants([
        ...restaurants.slice(0, index),
        { ...restaurants[index], isFavorite: !restaurants[index].isFavorite },
        ...restaurants.slice(index + 1),
      ])
    }
  }

  function handleBookmarkSightseeing(id) {
    const index = sightseeing.findIndex(sightseeing => sightseeing.id === id)
    if (index !== -1) {
      setSightseeing([
        ...sightseeing.slice(0, index),
        { ...sightseeing[index], isFavorite: !sightseeing[index].isFavorite },
        ...sightseeing.slice(index + 1),
      ])
    }
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4.5rem;
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1560158220-84217e289b76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhbWJ1cmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60');
`
