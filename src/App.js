import SightseeingPage from './pages/Sightseeingpage/SightseeingPage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import { useState } from 'react'
import styled from 'styled-components'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('sightseeing')
  return (
    <AppGrid>
      <SightseeingPage nameOfCategory="Sightseeing" />

      <RestaurantPage nameOfCategory="Restaurants" />
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto min-content;
  height: 100vh;
  width: 100vw;
  padding: 12px;
  gap: 20px;
`
