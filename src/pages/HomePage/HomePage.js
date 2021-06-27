import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'

export default function HomePage({ pages }) {
  return (
    <Wrapper>
      <Header>App title</Header>
      <Navigation pages={pages} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  grid-template-rows: 1fr 2fr;
  nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    a {
      width: 45%;
      box-shadow: 3px 3px 7px;
      font-size: 1.25rem;
    }
  }
`
