import { React } from 'react'
import styled from 'styled-components'
import { changeImage, detailedPostMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
  &:hover {
    cursor: pointer;
  }
`

const Picture = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    width: 102%;
    height: 102%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 1109px) {
    width: 70%;
    min-width: 17rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 22rem;
  margin: 1.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`

const DiaryType = () => {
  return (
    <Posts>
      {dummydata.map(post => (
        <PictureWrapper
          key={post.id}
          onClick={() => {
            dispatch(changeImage(post))
            dispatch(detailedPostMode())
          }}
        >
          <Picture src={post.src} />
        </PictureWrapper>
      ))}
    </Posts>
  )
}

export default DiaryType
