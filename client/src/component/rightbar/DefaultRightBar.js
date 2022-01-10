import React from 'react'
import styled from 'styled-components'
import logo from '../../static/logo.png'
import { AddPost } from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { createPostMode } from '../../actions/index'
import { Link } from 'react-router-dom'

const DefaultRightBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;

  & > img {
    width: 12rem;
    height: 10rem;
    margin-bottom: 2rem;
  }

  & > h1 {
    line-height: 0.5;
  }
  & > h2 {
    font-size: 1.2rem;
    line-height: 0;
  }
`

const AddPostBig = styled(AddPost)`
  width: 10rem;
  height: 4rem;
  flex-grow: 0;
`

function DefaultRightBar() {
  const loginState = useSelector(state => state.loginReducer)
  const { isLogin } = loginState
  const dispatch = useDispatch()

  const handleCreatePost = () => {
    dispatch(createPostMode())
  }

  return (
    <DefaultRightBarWrapper>
      <h1>어서와요!</h1>
      <h2>오늘 하루는 어떤 색이었나요?</h2>
      <img src={logo} />
      {isLogin ? (
        <AddPostBig onClick={handleCreatePost} />
      ) : (
        <Link to="/signup">
          <AddPostBig />
        </Link>
      )}
    </DefaultRightBarWrapper>
  )
}

export default DefaultRightBar
