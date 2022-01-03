import React from 'react'
import styled from 'styled-components'
import logo from '../static/fiveMoods.png'
import addPost from '../static/addPost.png'

const Content1 = styled.h1`
  text-align: center;
`
const Content2 = styled.h2`
  text-align: center;
`
const FiveMood = styled.img`
  display: block;
  margin: 0px auto;
`
const AddPost = styled.img`
  display: block;
  margin: 0px auto;
`


function RightBar () {
  return (
    <>
      <br /><br /><br /><br /> 
      <Content1>어서와요</Content1>
      <Content2>오늘 하루는 어떤 색이었나요?</Content2>
      <FiveMood src={logo} />
      <br /><br />
      <AddPost src={addPost} />      
    </>
  )
}

export default RightBar