import React from 'react'
import styled from 'styled-components'
import { MdSettings } from 'react-icons/md'

const ColorMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const Gear = styled(MdSettings)`
  width: 10rem;
  height: 10rem;
  color: #ff9900;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  animation: spinner 3s infinite;
`

const ColorMap = () => {
  return (
    <ColorMapWrapper>
      <Gear />
      <h1>아직 준비중 입니다!</h1>
    </ColorMapWrapper>
  )
}

export default ColorMap
