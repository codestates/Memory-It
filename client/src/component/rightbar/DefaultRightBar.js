import React from 'react'
import styled from 'styled-components'
import logo from '../../static/logo.png'
import { AddPost, Pen } from '../Header'
import { useSelector, useDispatch } from 'react-redux'
import { createPostMode } from '../../actions/index'
import { useNavigate, Link } from 'react-router-dom'

const DefaultRightBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 100%;

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
  @media screen and (max-width: 1000px) {
    /* display: none; */
    background: white;
  }
`

const AddPostBig = styled(AddPost)`
  margin-top: 1rem;
  width: 10rem;
  height: 4rem;
`
const PenBig = styled(Pen)`
  width: 1.5rem;
  height: 1.5rem;
`

function DefaultRightBar() {
  const loginState = useSelector(state => state.loginReducer)
  const { isLogin } = loginState
  const dispatch = useDispatch()

  const handleCreatePost = () => {
    if (isLogin) {
      dispatch(createPostMode())
    } else {
      navigate('/login')
    }
  }

  return (
    <DefaultRightBarWrapper>
      <h1>어서와요!</h1>
      <h2>오늘 하루는 어떤 색이었나요?</h2>
      <img src={logo} />
      {isLogin ? (
        <AddPostBig onClick={handleCreatePost}>
          <PenBig />
          <h2>작성하기</h2>
        </AddPostBig>
      ) : (
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <AddPostBig>
            <PenBig />
            <h2>시작하기</h2>
          </AddPostBig>
        </Link>
      )}
    </DefaultRightBarWrapper>
  )
}

export default DefaultRightBar
