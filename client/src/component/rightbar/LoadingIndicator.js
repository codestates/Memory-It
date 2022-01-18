import React from 'react'
import styled from 'styled-components'
import { DetailPost, DetailPostBackdrop, PictureContainer } from './DetailedPost'
import { FaPen } from 'react-icons/fa'
const LoaderContainer = styled(DetailPost)`
  div:nth-of-type(3) {
    margin-right: 0px;
  }
`

const LoadingBar = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  border-radius: 50%;

  top: 47.5%;
  left: ${props => props.offset}%;

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
  return (
    <DetailPostBackdrop>
      <LoaderContainer>
        <LoadingBar className="one" offset={30}></LoadingBar>
        <LoadingBar className="two" offset={45}></LoadingBar>
        <LoadingBar className="three" offset={60}></LoadingBar>
      </LoaderContainer>
    </DetailPostBackdrop>
  )
}
export default LoadingIndicator
