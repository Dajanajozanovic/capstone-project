import PropTypes from 'prop-types'
import Card from './../../components/Card/Card'
import locations from './../../data.json'
import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'
import Button from './../../components/Button/Button'

RestaurantPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function RestaurantPage({ onNavigate }) {
  return (
    <Wrapper>
      <Header>Food and Drinks</Header>
      <ListWrapper>
        {locations.restaurants.map(restaurant => {
          const {
            id,
            image,
            title,
            text,
            adress,
            openingHours,
            entry,
          } = restaurant
          return (
            <Card
              key={id}
              image={image}
              title={title}
              text={text}
              adress={adress}
              openingHours={openingHours}
              entry={entry}
            />
          )
        })}
      </ListWrapper>
      <Button onClick={onNavigate}>Sightseeing</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 10px;
  padding: 5px;
`
