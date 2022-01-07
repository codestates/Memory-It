import React from 'react'
import styled from 'styled-components'
import mapExample from '../dummy/mapExample.png'

const MapSection = styled.div`
  text-align: center;
`
const Map = styled.img`
  margin-top: 2vw;
  margin-left: 2vw;
  width: 55vw;
`

function MapType () {
  return (
    <MapSection>
      <Map src={mapExample} />
    </MapSection>

  )

}

export default MapType