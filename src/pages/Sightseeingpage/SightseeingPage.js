import PropTypes from 'prop-types'
import Card from '../../components/Card/Card'
import locations from '../../data.json'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'

SightseeingPage.propTypes = {
  sightseeing: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  onNavigate: PropTypes.func.isRequired,
}

export default function SightseeingPage({ onNavigate }) {
  return (
    <Wrapper>
      <Header>Sightseeing</Header>
      <ListWrapper>
        {locations.sightseeing.map(sightseeing => {
          const { id, image, title, text } = sightseeing
          return <Card key={id} image={image} title={title} text={text} />
        })}
      </ListWrapper>
      <Button onClick={onNavigate}>Restaurants</Button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 10px;
  padding: 5px;
`
