import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import bookmarkActive from './../../images/red_heart.png'
import bookmarkInactive from './../../images/rosa_heart.png'

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
    top: -10px;
    right: -5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`
