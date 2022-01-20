import React from 'react'
import styled from 'styled-components'
import { DetailPost, DetailPostBackdrop } from './DetailedPost'
import { LoadingBar } from '../loader/indicator'

const LoaderContainer = styled(DetailPost)`
  div:nth-of-type(3) {
    margin-right: 0px;
  }
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
