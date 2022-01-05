import React from 'react'
import styled from 'styled-components'
import logo from '../static/fiveMoods.png'
import addPost from '../static/addPost.png'
import dummydata from '../dummy/dummydata'

const DefaultRightBar = styled.div``

const Content1 = styled.h1`
  text-align: center;
`
const Content2 = styled.h2`
  text-align: center;
`
const FiveMood = styled.img`
  display: block;
  margin: 0px auto;
  width: 17vw;
`
const AddPost = styled.img`
  display: block;
  margin: 0px auto;
`

const DetailedPost = styled.div`
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
const MapLayer = styled.div``
const DetailedPlace = styled.img``

function RightBar () {
  return (
    <>
      <DefaultRightBar>
        <br /><br /><br /><br /> 
        <Content1>어서와요</Content1>
        <Content2>오늘 하루는 어떤 색이었나요?</Content2>
        <FiveMood src={logo} />
        <br /><br />
        <AddPost src={addPost} />      
      </DefaultRightBar>
      {/* <DetailedPost>
        <PicturePost src={dummydata[3].src} />
        <OrderOfPost>1/4</OrderOfPost>
        <DetailedMood>파랑색, 보라색</DetailedMood>
        <DetailContent>올해로 26살. 이젠 그냥 아저씨인 걸까?</DetailContent>
        <br /><br />
        <HorizenLine />
        <MapLayer>
          여기에 지도가 나옴
        </MapLayer>
      </DetailedPost> */}
    </>
  )
}

export default RightBar