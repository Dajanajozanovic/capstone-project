import styled from 'styled-components'
import { useState } from 'react'
import Sightseeingpage from './pages/Sightseeingpage/SightseeingPage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('sightseeingPage')

  return (
    <AppGrid>
      {currentPage === 'sightseeingPage' && (
        <Sightseeingpage onNavigate={() => setCurrentPage('restaurantPage')} />
      )}

      {currentPage === 'restaurantPage' && (
        <RestaurantPage onNavigate={() => setCurrentPage('sightseeingPage')} />
      )}
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
