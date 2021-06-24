import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from './../../components/Card/Card'
import Header from './../../components/Header/Header'

RestaurantPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function RestaurantPage({ handleBookmark, restaurants }) {
  return (
    <Wrapper>
      <Header>Food and Drinks</Header>
      <ListWrapper>
        {restaurants.map(restaurants => {
          return (
            <Card
              key={restaurants.id}
              handleBookmark={handleBookmark}
              {...restaurants}
            />
          )
        })}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
`
const ListWrapper = styled.ul`
  padding: 0;
`
