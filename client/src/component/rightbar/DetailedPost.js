import React from "react"
import styled from "styled-components"
import dummydata from '../../dummy/dummydata'
import allMood from '../../static/allMood.png'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const DetailedPostSection = styled.div`
  text-align: center;
`
const PicturePost = styled.img`
  width: 25vw;
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
  border: 1px solid #C4C4C4;
`
const ExitDetailedPost = styled.div``
const MapLayer = styled.div``
const DetailedPlace = styled.img``

function DetailedPost () {
  const navigate = useNavigate()
  const handleExit = () => {
    navigate('/')
  }

  const state = useSelector(state => state.changeImageReducer)
  const { picture } = state

  const moods = () => {
    if (picture.mood.length === 5) {
      return (
        <Mood src={allMood} />
      )
    }
    let mood = []

    for (let i=0;i<picture.mood.length;i++) {
      if (picture.mood[i] === 1) {  
        mood.push(<Mood src={yellowMood} />)  
      }
      if (picture.mood[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (picture.mood[i] === 3) {
        mood.push(<Mood src={redMood} />)  
      }
      if (picture.mood[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (picture.mood[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }  

  return (
    <DetailedPostSection>
      <PicturePost src={picture.src} />
      <OrderOfPost>{picture.id}/{dummydata.length}</OrderOfPost>
      <DetailedMood>{moods()}</DetailedMood>
      <DetailContent>{picture.content}</DetailContent>
      <br /><br />
      <ExitDetailedPost onClick={handleExit}>X</ExitDetailedPost>
      <HorizenLine />
      <MapLayer>
        여기에 지도가 나옴
      </MapLayer>
    </DetailedPostSection>
  )
}

export default DetailedPost