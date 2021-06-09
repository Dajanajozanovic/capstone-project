import styled from 'styled-components'
import { useState } from 'react'
import Sightseeingpage from './pages/Sightseeingpage/SightseeingPage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('sightseeingPage')

  return (
    <AppGrid>
      {currentPage === 'sightseeingPage' && (
        <Sightseeingpage onNavigate={showSightseeingPage} />
      )}

      {currentPage === 'restaurantPage' && (
        <RestaurantPage onNavigate={showRestaurantPage} />
      )}
    </AppGrid>
  )

  function showRestaurantPage() {
    setCurrentPage('sightseeingPage')
  }
  function showSightseeingPage() {
    setCurrentPage('restaurantPage')
  }
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
