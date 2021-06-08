import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  font-family: 'Roboto';
  font-size: 20px;
  width: 100vw;
  border-radius: 26px;
  background: #dcdcdc;
  box-shadow: 35px 35px 70px #585858, -35px -35px 70px #ffffff;
`
