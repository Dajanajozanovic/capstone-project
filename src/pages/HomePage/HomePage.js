import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Slider/Slider'
import images from '../../images.json'
import PropTypes from 'prop-types'

HomePage.propTypes = {
  images: PropTypes.string,
  pages: PropTypes.string,
}

export default function HomePage({ pages }) {
  const imageArray = images.map(images => images.image)
  return (
    <Wrapper>
      <Header>VisitHamburg</Header>
      <Navigation pages={pages} />
      <Slider images={imageArray}>
        <Sliderarea />
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  grid-template-rows: 4rem 1fr;
  align-items: end;
  height: 100vh;

  nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 10;
    margin-bottom: 10rem;
    a {
      width: 45%;
      box-shadow: 3px 3px 7px;
      font-size: 1.25rem;
    }
  }
`
const Sliderarea = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 80%;
`
