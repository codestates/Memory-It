import React from 'react'
import styled from 'styled-components'
import logo from '../../static/logo.png'
// import addPost from '../../static/addPost.png'
import { AddPost } from '../Header'
import { useDispatch } from 'react-redux'
import { createPostMode } from '../../actions/index'

const DefaultRightBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  width: 100%;
  height: 100%;

  & > img {
    width: 12rem;
    height: 10rem;
    margin-bottom: 2rem;
  }
`

const AddPostBig = styled(AddPost)`
  width: 10rem;
  height: 4rem;
  flex-grow: 0;
`

function DefaultRightBar() {
  const dispatch = useDispatch()
  const handleCreatePost = () => {
    dispatch(createPostMode())
  }

  return (
    <DefaultRightBarWrapper>
      <h1>어서와요!</h1>
      <h2>오늘 하루는 어떤 색이었나요?</h2>
      <img src={logo} />
      <AddPostBig onClick={handleCreatePost} />
    </DefaultRightBarWrapper>
  )
}

export default DefaultRightBar
