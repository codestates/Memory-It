import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { postingmapMode } from '../../actions'
import { changeMarkerSize } from '../../servertest/mapResource'
import { Gear } from './ColorMap'

const MapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* height: 100%; */
  /* overflow: hidden; */
`
const Map = styled.div`
  /* background-color: lightgray; */
`

function MapType({post}) {
  const [timeCheck, timeChecker] = useState()
  const [ data, setData ] = useState(post[0])
  const userPostInfo = useSelector(state => state.rightbarReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(data)
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(data.lng, data.lat),
      level: 5,
    }

    const map = new kakao.maps.Map(container, options)

    const getEmotion = () => {
      switch(data.emotions[1]) {
        case 1:
          return 'https://cdn.discordapp.com/attachments/929022343689420871/929022390179094558/2022-01-07_11.32.39.png'
        case 2: 
          return 'https://cdn.discordapp.com/attachments/929022343689420871/929022390443319416/2022-01-07_11.32.51.png'
        case 3:
          return 'https://cdn.discordapp.com/attachments/929022343689420871/929022389981958164/2022-01-07_11.32.30.png'
        case 4:
          return 'https://cdn.discordapp.com/attachments/929022343689420871/929022390900518952/2022-01-07_11.33.04.png'
        case 5:
          return 'https://cdn.discordapp.com/attachments/929022343689420871/929022390674010112/2022-01-07_11.32.58.png'
      }
      
    }
    //마커 이미지 가져와서 표시하기
    const getMarkerImage = (small = false) => {
      const imageSrc = getEmotion(), // 마커이미지의 주소입니다
        imageSize = !small ? new kakao.maps.Size(64, 69) : new kakao.maps.Size(40, 45), // 마커이미지의 크기입니다
        imageOption = {
          offset: !small ? new kakao.maps.Point(27, 69) : new kakao.maps.Point(20, 48),
        } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(data.lng, data.lat)
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      })
      marker.setMap(map)
    }

    getMarkerImage()

    var mapTypeControl = new kakao.maps.MapTypeControl()

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      changeMarkerSize(map, [data.marker], [data])
      console.log('세번째 인자',data)
      }
    )    
  }, [])
  // console.log('data가 뭐니',data)
  return (
    <MapSection id='map'>
       {/* <Gear />
       <h1>아직 준비중 입니다!</h1> */}
    </MapSection>
    
  )
}

export default MapType
