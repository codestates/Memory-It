import React from "react"
import styled from "styled-components"
import dummydata from '../../dummy/dummydata'
import { useNavigate } from "react-router-dom"

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

  return (
    <DetailedPostSection>
      <PicturePost src={dummydata[3].src} />
      <OrderOfPost>1/4</OrderOfPost>
      <DetailedMood>파랑색, 보라색</DetailedMood>
      <DetailContent>올해로 26살. 이젠 그냥 아저씨인 걸까?</DetailContent>
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