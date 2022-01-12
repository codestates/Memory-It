import { React } from 'react'
import styled from 'styled-components'
import { changeImage, detailedPostMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'

const Posts = styled.div`
  @media only screen and (max-width: 965px) {
    justify-content: center;
    padding-left: 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 1rem;
  padding-left: 7%;
`

const Picture = styled.div`
  background: url(${props => props.imageSrc || null});
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:hover {
    transition: 3s;
    background-size: 110% 110%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    height: calc(50vw - 40%);
  }
  @media only screen and (max-width: 965px) {
    max-width: 22rem;
    width: 86%;
    height: calc(50vw - 10%);
  }
  @media only screen and (max-width: 670px) {
    width: 80%;
    height: 24rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  height: calc(50vw - 54%);
  border-radius: 20px;
  margin: 1rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1481px) {
    width: 28%;
    height: calc(50vw - 75%);
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
