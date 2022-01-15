import React from 'react'
import styled from 'styled-components'
import { DetailPost, DetailPostBackdrop } from './DetailedPost'
import { FaPen } from 'react-icons/fa'
const LoaderWrapper = styled(DetailPost)`
  /* background-color: lightgray; */
  border: 1px solid lightgray;
  justify-content: center;
  flex-direction: row;
  div:nth-of-type(3) {
    margin-right: 0px;
  }
`

const LoadingBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 20px;

  animation: loadingAnimation 2.5s infinite;
  &.two {
    animation-delay: 0.3s;
  }
  &.three {
    animation-delay: 0.6s;
  }
  @keyframes loadingAnimation {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-30px);
    }
    50% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    /* 57% {
      transform: scale(1, 1) translateY(0);
    } */
    65% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`

const Pen = styled(FaPen)`
  background-color: white;
  color: inherit;
  /* color: transparent; */
  position: absolute;
  width: 50px;
  height: 50px;
`

const LoadingIndicator = () => {
  console.log('로딩인디케이터 지나감요')
  return (
    <DetailPostBackdrop>
      <LoaderWrapper>
        <LoadingBar className="one"></LoadingBar>
        <LoadingBar className="two"></LoadingBar>
        <LoadingBar className="three"></LoadingBar>
      </LoaderWrapper>
    </DetailPostBackdrop>
  )
}
export default LoadingIndicator
