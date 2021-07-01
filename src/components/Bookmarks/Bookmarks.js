import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import { ReactComponent as bookmarkActive } from '../../assets/icons/anchor.svg'
import { ReactComponent as bookmarkInactive } from '../../assets/icons/anchor.svg'

Bookmarks.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  children: PropTypes.node,
}

export default function Bookmarks({ isBookmarked, onClick, ...props }) {
  return (
    <BookmarkStyled {...props}>
      <img
        src={isBookmarked ? bookmarkActive : bookmarkInactive}
        alt=""
        onClick={onClick}
      />
    </BookmarkStyled>
  )
}

const BookmarkStyled = styled.div`
  img {
    position: absolute;
    top: 35px;
    right: 35px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`
