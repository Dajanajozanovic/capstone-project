import PropTypes from 'prop-types'
import Card from './../../components/Card/Card'
import location from './../../data.json'
import styled from 'styled-components'
import Header from './../../components/Header/Header'
import Button from './../../components/Button/Button'

RestaurantPage.propTypes = {
  nameOfCategory: PropTypes.string,
}

export default function RestaurantPage({ nameOfCategory }) {
  return (
    <Grid>
      <div>
        <Header>{nameOfCategory}</Header>
        {location.restaurants.map(location => {
          const { id, image, title, text } = location
          return <Card key={id} image={image} title={title} text={text} />
        })}
        <Button>Home</Button>
      </div>
    </Grid>
  )
}
const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
