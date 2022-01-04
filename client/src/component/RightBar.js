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

const DetailedPost = styled.div``
const PicturePost = styled.img``
const OrderOfPost = styled.div``
const DetailedMood = styled.div``
const DetailContent = styled.div``

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
    </>
  )
}

export default RightBar