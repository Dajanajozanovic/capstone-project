import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  background: ${p => (p.isActive ? '#dbdbdb' : 'grey')};
`

/* background: #dbdbdb;
box-shadow:  24px 24px 48px #bababa,
             -24px -24px 48px #fcfcfc; */
