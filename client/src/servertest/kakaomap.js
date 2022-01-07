import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const MapWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: gray;
`
// geoLocation 오류메세지 옵션
const errorMessage = err => {
  console.error(`Geo location ERR!!: ${err.code} -> ${err.message}`)
}
// geoLocation 옵션
const geoOptions = {
  enableHighAccuracy: false,
  maximumAge: 600000,
  timeout: 600000,
}
// 카카오맵 생성시 옵션
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 5,
}
// 카카오맵 마커 옵션
const displayMarker = (map, position, src) => {
  const imageSize = new kakao.maps.Size(64, 69)
  const imageOption = { offset: new kakao.maps.Point(27, 69) }
  const markerImage = new kakao.maps.MarkerImage(src, imageSize, imageOption)

  const content =
    '<div style="padding:5px; font-size: 10px">기억에 남는곳을 표시해보세요!</div>'
  const marker = new kakao.maps.Marker({
    map,
    position,
    draggable: true,
    image: markerImage,
  })
  const markAlert = new kakao.maps.InfoWindow({ content, removable: true })

  markAlert.open(map, marker)
  map.setCenter(position)

  return [marker, markAlert]
}
// 카카오맥 클릭 이벤트
const clickEvent = (mouseEvent, marker, iw) => {
  iw.close()
  const latlng = mouseEvent.latLng
  marker.setPosition(latlng)
}

// * 여기서부터 컴포넌트
const KakaomapTester = () => {
  const container = useRef(null)
  const [timeCheck, timeChecker] = useState()
  const [markerSrc, setMarkerSrc] = useState(
    'https://cdn.discordapp.com/attachments/928852076488970330/928915784342839366/db3166024369d44e.png'
  )

  const [coords, setCoors] = useState()

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

          const [marker, markAlert] = displayMarker(map, baseCoords, markerSrc)

          const end = Date.now()
          timeChecker(`${(end - start) / 1000} 초`)

          kakao.maps.event.addListener(map, 'click', mouseEvent =>
            clickEvent(mouseEvent, marker, markAlert)
          )
          kakao.maps.event.addListener(marker, 'dragstart', () => {
            console.log(marker.getPosition())
            markAlert.close()
          })
          kakao.maps.event.addListener(marker, 'dragend', () => {})
        },
        errorMessage,
        geoOptions
      )
    } else {
      const defaultLatLng = new kakao.maps.LatLng(33.450701, 126.570667)
      const message = '해당 디바이스는 geolocation을 지원하지 않습니다.'
      displayMarker(map, defaultLatLng, message)
    }
  }, [])

  const onClick = () => {}

  return (
    <>
      <MapWrapper id="map" ref={container}></MapWrapper>
      <p>사용자 위치 정보를 가져오는대 걸린시간: {timeCheck ?? '위치탐색중.'} </p>
      <button onClick={onClick}>클릭</button>
    </>
  )
}

export default KakaomapTester
