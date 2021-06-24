import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'

SightseeingPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function SightseeingPage({ handleBookmark, sightseeing }) {
  return (
    <Wrapper>
      <Header>Sightseeing</Header>
      <ListWrapper>
        {sightseeing.map(sightseeing => {
          return (
            <Card
              key={sightseeing.id}
              handleBookmark={handleBookmark}
              {...sightseeing}
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
  section:last-child {
    margin-bottom: 20px;
  }
`
