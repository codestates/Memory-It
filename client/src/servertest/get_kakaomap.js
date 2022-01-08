import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { changeMarkerSize, dummyCoords, options, setMarkers } from './mapResource'

const MapWrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: gray;
`

const GetKakaoMapTester = () => {
  const container = useRef(null)
  const [timeCheck, timeChecker] = useState()

  useEffect(() => {
    const start = Date.now()
    navigator.geolocation.getCurrentPosition(position => {
      const baseCoords = new kakao.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      )
      map.setCenter(baseCoords)
      const end = Date.now()
      timeChecker(`${(end - start) / 1000} 초`)
    })

    const map = new kakao.maps.Map(container.current, options)
    const markers = setMarkers(map, dummyCoords)

    kakao.maps.event.addListener(map, 'zoom_changed', () =>
      changeMarkerSize(map, markers, dummyCoords)
    )
  }, [])
  return (
    <>
      <MapWrapper ref={container}></MapWrapper>
      <p>현재위치 계산시간: {timeCheck}</p>
    </>
  )
}

export default GetKakaoMapTester
