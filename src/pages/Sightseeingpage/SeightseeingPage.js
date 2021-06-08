import PropTypes from 'prop-types'
import Card from './../../components/Card/Card'
import location from './../../data.json'
import styled from 'styled-components'
import Header from './../../components/Header/Header'
import Button from './../../components/Button/Button'

SeightseeingPage.propTypes = {
  nameOfCategory: PropTypes.string,
}

export default function SeightseeingPage({ nameOfCategory }) {
  return (
    <Grid>
      <div>
        <Header>{nameOfCategory}</Header>
        {location.map(location => {
          const { id, attributes } = location
          return (
            <Card
              key={id}
              image={attributes.image}
              title={attributes.title}
              text={attributes.text}
            />
          )
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
