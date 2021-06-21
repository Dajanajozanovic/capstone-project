import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import bookmarkActive from './../../images/red_heart.png'
import bookmarkInactive from './../../images/rosa_heart.png'
import { useState } from 'react'

Bookmarks.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  children: PropTypes.node,
}

export default function Bookmarks(props) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <BookmarkStyled {...props}>
      <button>
        <img
          src={isBookmarked ? bookmarkActive : bookmarkInactive}
          alt=""
          onClick={() => setIsBookmarked(!isBookmarked)}
        />
      </button>
    </BookmarkStyled>
  )
}

const BookmarkStyled = styled.div`
  img {
    position: absolute;
    top: -10px;
    right: -5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`
