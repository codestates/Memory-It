import React from "react"
import styled from "styled-components"
import dummydata from '../../dummy/dummydata'
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

  return (
    <DetailedPostSection>
      <PicturePost src={picture.src} />
      <OrderOfPost>{picture.id}/{dummydata.length}</OrderOfPost>
      <DetailedMood>파랑색, 보라색</DetailedMood>
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