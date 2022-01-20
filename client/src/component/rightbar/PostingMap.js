import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPostMode, welcomeMode } from '../../actions'
import styled from 'styled-components'
import Kakaomap from '../../servertest/kakaomap'
import axios from 'axios'
import { DetailPostBackdrop } from './DetailedPost'
import { CreatingWrapper, NextButton } from './CreatePost'

const GetKakaoMapWrap = styled.div`
  margin-top: 25px;
`
const PrevBtn = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20%;
  width: 80px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  letter-spacing: 1px;
  outline: none;
  border: 1px solid #ff9900;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  z-index: 0;

  cursor: pointer;
  :hover {
    background-color: #ff9900;
    color: white;
  }
`

const H3 = styled.h3`
  line-height: 0;
  margin: 3rem 0 1rem 0;
`
const H4 = styled.h4`
  line-height: 0px;
  color: lightgray;
`

const PostBtn = styled(PrevBtn)`
  left: 60%;
`

const PostingMap = ({ setRer }) => {
  const userPostInfo = useSelector(state => state.rightbarReducer)
  const { data, postingImages } = userPostInfo
  const { content, emotion, lat, lng, images } = data
  const dispatch = useDispatch()

  const handleToPostingPage = () => {
    dispatch(createPostMode())
  }

  const postingHandler = e => {
    e.preventDefault()
    const formData = new FormData()

    for (let i = 0; i < postingImages.length; i++) {
      formData.append('postingImages', postingImages[i])
    }

    formData.append(
      'data',
      JSON.stringify({ content, emotion, lat, lng, marker: emotion[0] })
    )

    axios
      .post('http://172.30.1.11:8081/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      .then(res => {
        setRer({})
        alert('포스트가 등록되었습니다.')
        dispatch(welcomeMode())
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <DetailPostBackdrop>
      <CreatingWrapper>
        <GetKakaoMapWrap>
          <Kakaomap></Kakaomap>
        </GetKakaoMapWrap>
        <H3>오늘 다녀온곳이 궁금해지네요!</H3>
        <H4>클릭 또는 드래그로 옮길 수 있어요</H4>
        <PrevBtn onClick={handleToPostingPage}>PREV</PrevBtn>
        <PostBtn
          onClick={e => {
            postingHandler(e)
          }}
        >
          POST
        </PostBtn>
      </CreatingWrapper>
    </DetailPostBackdrop>
  )
}

export default PostingMap
