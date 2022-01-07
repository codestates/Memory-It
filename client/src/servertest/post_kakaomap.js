import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { joy, anger, sadness, disgust, fear } from './mapResource'
import { errorMessage, geoOptions } from './mapResource'
import { options, displayMarker, clickEvent, getCustomMarker } from './mapResource'

const MapWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

// * 여기서부터 컴포넌트
const PostKakaomapTester = () => {
  const container = useRef(null)
  const [timeCheck, timeChecker] = useState()
  // const [map, setMap] = useState()
  const [coords, setCoors] = useState({ lat: 0, lng: 0 })
  const [marker, setMarker] = useState()

  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options)

    if (navigator.geolocation) {
      const start = Date.now()
      navigator.geolocation.getCurrentPosition(
        position => {
          const baseCoords = new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          )

          const [marker, markAlert] = displayMarker(map, baseCoords, joy, setMarker)

          const end = Date.now()
          timeChecker(`${(end - start) / 1000} 초`)

          kakao.maps.event.addListener(map, 'click', mouseEvent => {
            const { La: lat, Ma: lng } = clickEvent(mouseEvent, marker, markAlert)
            setCoors({ lat, lng })
          })

          kakao.maps.event.addListener(marker, 'dragstart', () => {
            markAlert.close()
          })

          kakao.maps.event.addListener(marker, 'dragend', () => {
            const { La: lat, Ma: lng } = marker.getPosition()
            console.log(`위도:${lat} & '경도:${lng}`)
            setCoors({ lat, lng })
          })

          // setMap(map)
          setMarker(marker)
        },
        errorMessage,
        geoOptions
      )
    } else {
      alert('해당 디바이스는 geolocation을 지원하지 않습니다.')
      const defaultLatLng = new kakao.maps.LatLng(33.450701, 126.570667)
      displayMarker(map, defaultLatLng, joy)
    }
  }, [])

  const onClick = src => {
    const markerImage = getCustomMarker(src)
    marker.setImage(markerImage)
  }

  return (
    <>
      <MapWrapper id="map" ref={container}></MapWrapper>
      <p>사용자 위치 정보를 가져오는대 걸린시간: {timeCheck ?? '위치탐색중..'} </p>
      <Button onClick={() => onClick(joy)}>기쁨</Button>
      <Button onClick={() => onClick(sadness)}>슬픔</Button>
      <Button onClick={() => onClick(anger)}>화남</Button>
      <Button onClick={() => onClick(disgust)}>짜증</Button>
      <Button onClick={() => onClick(fear)}>불안</Button>
    </>
  )
}

export default PostKakaomapTester
