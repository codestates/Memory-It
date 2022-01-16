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

const Kakaomap = () => {
  const [timeCheck, timeChecker] = useState()

  const userPostInfo = useSelector(state => state.rightbarReducer)
  console.log('이고왜 나나옴???', userPostInfo)
  const { data, postingImages } = userPostInfo
  console.log('데이터 잘나옴?????', data)
  console.log('이미지파일정보 잘나옴?????', postingImages)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    })

    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(data.lat, data.lng),
      level: 5,
    }
    const map = new kakao.maps.Map(container, options)

    // const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
    // imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    // imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    const markerPosition = new kakao.maps.LatLng(data.lat, data.lng)
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      //   image: markerImage
    })
    marker.setMap(map)
    marker.setDraggable(true)

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng)

      var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, '
      message += '경도는 ' + latlng.getLng() + ' 입니다'

      var resultDiv = document.getElementById('clickLatlng')
      resultDiv.innerHTML = message
    })
    var mapTypeControl = new kakao.maps.MapTypeControl()

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
  }, [])
  return (
    <>
      <MapWrapper id="map"></MapWrapper>
      <div id="clickLatlng"></div>
    </>
  )
}

export default Kakaomap
