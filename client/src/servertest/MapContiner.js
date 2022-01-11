import React, { useEffect, useRef, useState } from 'react'
const { kakao } = window

const MapContainer = props => {
  console.log('ddddd', props.Lat)
  console.log('lnnnn', props.Lng)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(props.Lng, props.Lat),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    var markerPosition = new kakao.maps.LatLng(props.Lng, props.Lat)
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [])

  return (
    <div
      id="map"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  )
}

export default MapContainer
