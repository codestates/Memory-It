import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import dummydata from '../../dummy/dummydata'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'
import { welcomeMode } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import axios from 'axios'
import MapContainer from './MapContainer'

const { kakao } = window

const DetailedPostSection = styled.div`
  text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100%;
  overflow: auto;
`
const PicturePost = styled.img`
  width: 15vw;
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
const MapLayer = styled.div`
  width: 500px;
  height: 500px;
  margin: 1.5vw;
`
const DetailedPlace = styled.img``

function DetailedPost() {
  const dispatch = useDispatch()
  const handleExit = () => {
    dispatch(welcomeMode())
  }

  const state = useSelector(state => state.changeImageReducer)
  const { picture } = state

  const moods = () => {
    let mood = []

    //     for (let i = 0; i < postInfo.emotion.length; i++) {
    //       if (picture.mood[i] === 1) {
    for (let i = 0; i < picture.emotion.length; i++) {
      if (picture.emotion[i] === 1) {
        mood.push(<Mood src={yellowMood} />)
      }
      if (picture.emotion[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (picture.emotion[i] === 3) {
        mood.push(<Mood src={redMood} />)
      }
      if (picture.emotion[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (picture.emotion[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }

  const [postInfo, setPostInfo] = useState({
    content: '받기전',
    emotion: [],
    lat: 129.068,
    lng: 37.572743,
  })
  const [images, setImages] = useState([])

  const GetThePost = async () => {
    await axios
      // .get('http://localhost:8081/posts?type=diary&year=2022', {
      //   withCredentials: true,
      // })
      .get('http://localhost:8081/posts/2', {
        withCredentials: true,
      })
      .then(res => {
        console.log('들어온데이터', res.data.data)
        console.log('들어온이미지', res.data.data.images)
        const { content, emotion, lat, lng } = res.data.data.post
        setImages(res.data.data.images)
        setPostInfo({
          ...postInfo,
          content: content,
          emotion: emotion,
          lat: lat,
          lng: lng,
        })
        console.log('포스트데이터', res.data.data.post)
        console.log('이미지데이터', res.data.data.images)
      })
      .catch(err => console.log(err))
  }

  const list = images.map(image => {
    return <PicturePost key={v4()} src={image} />
  })

  return (
    <>
      <DetailedPostSection>
        {list}
        <DetailedMood>{moods()}</DetailedMood>
        <DetailContent>{postInfo.content}</DetailContent>
        <br />
        <br />
        <ExitDetailedPost onClick={handleExit}>X</ExitDetailedPost>
        <HorizenLine />
        <MapContainer postInfo={postInfo}></MapContainer>
        <input type="button" onClick={GetThePost} value="여기눌러봐"></input>
      </DetailedPostSection>
    </>
  )
}

export default DetailedPost
