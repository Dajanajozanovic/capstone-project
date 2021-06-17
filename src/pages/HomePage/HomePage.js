import styled from 'styled-components/macro'
import Header from './../../components/Header/Header'

export default function HomePage() {
  return (
    <Wrapper>
      <Header>App title</Header>

      <div>
        <Image
          src="https://media-cdn.tripadvisor.com/media/photo-s/02/5a/ac/e6/ashoka.jpg"
          alt=""
        />
        <Image
          src="https://www.handelsblatt.com/images/container-terminal-altenwerder/26116210/2-format2020.jpg"
          alt=""
        />
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
  gap: 20px;
`
