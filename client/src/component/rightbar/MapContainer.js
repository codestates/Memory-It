import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const { kakao } = window

const MapLayer = styled.div`
  width: 300px;
  height: 300px;
  margin: 1.5vw;
`

const MapContainer = props => {
  // const container = useRef(null)
  // 프롭스로 내려ㅜ는 순가 이상해지네 ...
  //   console.log('라라라라', props.postInfo)
  //   console.log('라라라라', props.postInfo.lat)
  //   console.log('롱롱롱롱', props.postInfo.lng)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(props.postInfo.lng, props.postInfo.lat),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    var markerPosition = new kakao.maps.LatLng(props.postInfo.lng, props.postInfo.lat)
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [props.postInfo])

  return (
    <>
      <MapLayer id="map"></MapLayer>
    </>
  )
}

export default MapContainer
