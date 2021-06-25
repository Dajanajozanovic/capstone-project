import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'

LocationsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function LocationsPage({ handleBookmark, locations, title }) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <ListWrapper>
        {locations.map(location => {
          return (
            <Card
              key={location.id}
              handleBookmark={handleBookmark}
              {...location}
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
