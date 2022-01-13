import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const { kakao } = window

const MapLayer = styled.div`
  width: 80%;
  height: 60%;
  align-items: center;
`

const MapContainer = ({ lat, lng }) => {
  const mapRef = useRef(null)
  useEffect(() => {
    const container = mapRef.current
    const coords = new kakao.maps.LatLng(lng, lat)
    const options = {
      center: coords,
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    const marker = new kakao.maps.Marker({
      position: coords,
    })
    marker.setMap(map)
  }, [lat, lng])

  return <MapLayer id="map" ref={mapRef} />
}

export default MapContainer
