import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from './../../components/Card/Card'
import Header from './../../components/Header/Header'
import locations from './../../locations.json'

RestaurantPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function RestaurantPage({ handleBookmark, restaurants }) {
  return (
    <Wrapper>
      <Header>Food and Drinks</Header>

      <ListWrapper>
        {restaurants.map(restaurant => {
          const {
            id,
            image,
            title,
            text,
            address,
            openingHours,
            entry,
          } = restaurant
          return (
            <Card
              id={id}
              key={id}
              image={image}
              title={title}
              text={text}
              address={address}
              openingHours={openingHours}
              entry={entry}
              handleBookmark={handleBookmark}
            />
          )
        })}
      </ListWrapper>
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
