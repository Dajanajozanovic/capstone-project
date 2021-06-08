import PropTypes from 'prop-types'
import Card from './../components/Card/Card'
import location from './../data.json'
import styled from 'styled-components'
import Header from './../components/Header/Header'

CardPage.propTypes = {
  nameOfCategory: PropTypes.string,
}

export default function CardPage({ nameOfCategory }) {
  return (
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
    </div>
  )
}
