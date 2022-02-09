import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { changeMarkerSize, dummyCoords, options, setMarkers } from './mapResource'
import { useDispatch, useSelector } from 'react-redux'

const MapWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-color: gray;
  @media screen and (max-width: 375px) {
    width: 250px;
    height: 250px;
  }
`

const GetKakaoMapTester = () => {
  const container = useRef(null)
  const [timeCheck, timeChecker] = useState()

  const userPostInfo = useSelector(state => state.rightbarReducer)
  const { data, postingImages } = userPostInfo
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
