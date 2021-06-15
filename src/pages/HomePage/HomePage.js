import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'

import PropTypes from 'prop-types'

HomePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function HomePage({ onNavigate }) {
  return (
    <Wrapper>
      <Header>App title</Header>

      <div>
        <Image src="https://media-cdn.tripadvisor.com/media/photo-s/02/5a/ac/e6/ashoka.jpg" />
        <Image src="https://www.handelsblatt.com/images/container-terminal-altenwerder/26116210/2-format2020.jpg" />
      </div>
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

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const PageButtons = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`
