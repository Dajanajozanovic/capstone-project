import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import { ReactComponent as BookmarkIcon } from '../../assets/icons/anchor.svg'

Bookmarks.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  children: PropTypes.node,
}

export default function Bookmarks({ isBookmarked, onClick, ...props }) {
  return (
    <BookmarkStyled onClick={onClick} isBookmarked={isBookmarked} {...props}>
      <BookmarkIcon />
    </BookmarkStyled>
  )
}

const BookmarkStyled = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  /* width: 50px;
  height: 40px; */
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    color: ${props =>
      props.isBookmarked
        ? 'var(--color-active-background)'
        : 'var(--color-anchor)'};
    :hover {
      color: var(--color-active-background);
    }
  }
`
