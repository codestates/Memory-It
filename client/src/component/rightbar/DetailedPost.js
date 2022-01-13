import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import dummydata from '../../dummy/dummydata'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'
import { welcomeMode, changePostImage } from '../../actions/index'
import { v4 } from 'uuid'
import axios from 'axios'
import MapContainer from './MapContainer'

const { kakao } = window

const DetailedPostSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`

const Picture = styled.img`
  max-width: 100%;
`

const PicturePost = styled.img`
  width: 50px;
  border-style: solid;
  border-color: orange;
  border-width: 2px;
`
const PicturePostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
`

const OrderOfPost = styled.div``
const DetailedMood = styled.div`
  text-align: right;
  margin-right: 1vw;
`

const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

const DetailContent = styled.div`
  margin: 1vh;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
`
const HorizenLine = styled.hr`
  width: 24vw;
  border: none;
  border: 1px solid #c4c4c4;
`
const ExitDetailedPost = styled.span`
  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`

const Picture02 = styled.div`
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
    height: calc(60vw - 40%);
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
const DetailedPlace = styled.img``

function DetailedPost() {
  const dispatch = useDispatch()

  const state = useSelector(state => state.changeImageReducer)
  const { picture } = state

  const postIdState = useSelector(state => state.postIdReducer)
  const { postId } = postIdState

  const postInfoState = useSelector(state => state.postInfoReducer)
  const { postInfo } = postInfoState

  const postImageState = useSelector(state => state.postImageReducer)
  const { postImage } = postImageState

  console.log('TTTTTTTTTTTTTt', postImage)
  const [mainImage, setMainImage] = useState(postImage)
  // console.log('!!!!!!!!!!!!!!!', mainImage)

  const handleExit = () => {
    dispatch(welcomeMode())
  }
  const changePostedImage = postImage => {
    dispatch(changePostImage(postImage))
  }

  const moods = () => {
    let mood = []
    for (let i = 0; i < postInfo.emotion.length; i++) {
      if (postInfo.emotion[i] === 1) {
        mood.push(<Mood src={yellowMood} />)
      }
      if (postInfo.emotion[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (postInfo.emotion[i] === 3) {
        mood.push(<Mood src={redMood} />)
      }
      if (postInfo.emotion[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (postInfo.emotion[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }

  // const imageHandler = image => {
  //   // dispatch(changePostImage(image))
  //   setMainImage(image)
  // }

  // useEffect(async () => {
  //   await dispatch(changePostInfo(postInfo))
  //   dispatch(changePostImage(postInfo.images[0]))
  // }, [])

  const list = postInfo.images.map(image => {
    return (
      <PicturePost
        key={v4()}
        src={image}
        onClick={() => {
          changePostedImage(image)
          // setMainImage(image)
        }}
      />
    )
  })

  // const mainImage = postInfo.images[0]

  return (
    <>
      <DetailedPostSection>
        <ExitDetailedPost onClick={handleExit}>X</ExitDetailedPost>
        <Picture key={v4()} src={mainImage}></Picture>
        <br />
        <PicturePostWrapper>{list}</PicturePostWrapper>
        <br />
        <DetailedMood>{moods()}</DetailedMood>
        <DetailContent>{postInfo.content}</DetailContent>
        <br />
        <br />

        <HorizenLine />
        <MapContainer postInfo={postInfo}></MapContainer>
      </DetailedPostSection>
    </>
  )
}

export default DetailedPost
