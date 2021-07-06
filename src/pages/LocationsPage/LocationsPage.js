import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'

LocationsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function LocationsPage({
  handleBookmark,
  locations,
  title,
  setQuery,
}) {
  return (
    <Wrapper>
      <Header>{title}</Header>

      {title === 'Food and Drinks' && (
        <Form id="myForm" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search for your restaurants"
            name="search"
            aria-label="Search for restaurants"
            autoComplete="off"
          />
        </Form>
      )}

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

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.search.value
    setQuery(input)
    form.reset()
  }
}
const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
`
const ListWrapper = styled.ul`
  padding: 0;
`
const Form = styled.form`
  align-self: center;
  justify-self: center;
  padding-bottom: 150px;
  padding: 30px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`

const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: var(--color-primary);
  color: var(--color-secondary);
`
