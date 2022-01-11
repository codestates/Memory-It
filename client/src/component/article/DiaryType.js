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
`

const Picture = styled.div`
  background: url(${props => props.imageSrc || null});
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: 1s;
  border-radius: 20px;
  &:hover {
    transition: 3s;
    background-size: 110% 110%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 670px) {
    min-width: 17rem;
    max-width: 25rem;
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18rem;
  max-width: 19rem;

  width: calc(50% - 3rem);
  height: 23rem;
  margin: 1.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
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
          <Picture imageSrc={post.src} />
        </PictureWrapper>
      ))}
    </Posts>
  )
}

export default DiaryType
