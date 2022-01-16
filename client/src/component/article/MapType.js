import React from 'react'
import styled from 'styled-components'
import { Gear } from './ColorMap'

const MapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* height: 100%; */
  /* overflow: hidden; */
`
const Map = styled.div`
  /* background-color: lightgray; */
`

function MapType() {
  return (
    <MapSection>
      <Gear />
      <h1>아직 준비중 입니다!</h1>
    </MapSection>
  )
}

export default MapType
