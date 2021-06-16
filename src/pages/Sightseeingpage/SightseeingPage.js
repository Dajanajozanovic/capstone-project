import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import locations from '../../data.json'

SightseeingPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function SightseeingPage() {
  return (
    <Wrapper>
      <Header>Sightseeing</Header>
      <ListWrapper>
        {locations.sightseeing.map(
          ({ id, image, title, text, address, openingHours, entry }) => {
            return (
              <Card
                key={id}
                image={image}
                title={title}
                text={text}
                address={address}
                openingHours={openingHours}
                entry={entry}
              />
            )
          }
        )}
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
