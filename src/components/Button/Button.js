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
  color: white;
  border-radius: 31px;
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  box-shadow: 224px 24px 48px #656565, -24px -24px 48px #ffffff;
`
