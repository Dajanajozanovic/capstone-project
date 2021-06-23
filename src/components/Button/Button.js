import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  font-family: 'Roboto';
  font-size: 20px;
  width: 200px;
  color: darkgrey;
  border-radius: 31px;
  background-color: transparent;
  box-shadow: 4px 4px 8px #656565, -24px -24px 48px #ffffff;
  z-index: 10;
`
