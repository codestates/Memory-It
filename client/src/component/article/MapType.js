import React from 'react'
import styled from 'styled-components'

const MapSection = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;
`
const Map = styled.div`
  background-color: lightgray;
`

function MapType() {
  return (
    <MapSection>
      <Map />
    </MapSection>
  )
}

export default MapType
