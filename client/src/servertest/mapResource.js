// 더미 좌표
export const dummyCoords = [
  { lat: 35.2054, lng: 129.068, src: 'joy' },
  { lat: 35.203188176236104, lng: 129.072809861013, src: 'joy' },
  { lat: 35.212850317968275, lng: 129.03875260798642, src: 'joy' },
  { lat: 35.20565055471679, lng: 129.08055806016614, src: 'sadness' },
  { lat: 35.18567195334202, lng: 129.0429909187609, src: 'anger' },
  { lat: 35.179648910792196, lng: 129.07497777179492, src: 'fear' },
  { lat: 35.1826627979256, lng: 129.10087067563578, src: 'disgust' },
  { lat: 35.152345, lng: 129.117762, src: 'joy' },
]

// 마커이미지 주소
export const joy =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022390179094558/2022-01-07_11.32.39.png'
export const anger =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022389981958164/2022-01-07_11.32.30.png'
export const sadness =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022390900518952/2022-01-07_11.33.04.png'
export const disgust =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022390443319416/2022-01-07_11.32.51.png'
export const fear =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022390674010112/2022-01-07_11.32.58.png'

const joyMin =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022391311556628/2022-01-07_11.37.31.png'
const angerMin =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022391114420264/2022-01-07_11.37.24.png'
const sadnessMin =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022391810670612/2022-01-07_11.37.45.png'
const disgustMin =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022392074915840/2022-01-07_11.37.51.png'
const fearMin =
  'https://cdn.discordapp.com/attachments/929022343689420871/929022391567384656/2022-01-07_11.37.37.png'

// geoLocation 오류메세지 옵션
export const errorMessage = err => {
  console.error(`Geo location ERR!!: ${err.code} -> ${err.message}`)
}
// geoLocation 옵션
export const geoOptions = {
  enableHighAccuracy: false,
  maximumAge: 600000,
  timeout: 600000,
}

// 카카오맵 최소 생성시 옵션
export const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 5,
}

// 커스텀마커 제작
export const getCustomMarker = (emotion, small = false) => {
  if (emotion === 'joy') emotion = joy
  else if (emotion === 'anger') emotion = anger
  else if (emotion === 'sadness') emotion = sadness
  else if (emotion === 'disgust') emotion = disgust
  else emotion = fear

  const imageSize = !small ? new kakao.maps.Size(64, 69) : new kakao.maps.Size(40, 45)
  const imageOption = {
    offset: !small ? new kakao.maps.Point(27, 69) : new kakao.maps.Point(20, 48),
  }
  return new kakao.maps.MarkerImage(emotion, imageSize, imageOption)
}

// 카카오맵 마커 옵션
export const displayMarker = (map, position, src) => {
  const customMarker = getCustomMarker(src)
  const content =
    '<div style="padding:5px; font-size: 10px">기억에 남는곳을 표시해보세요!</div>'
  const marker = new kakao.maps.Marker({
    map,
    position,
    draggable: true,
    image: customMarker,
  })
  const markAlert = new kakao.maps.InfoWindow({ content, removable: true })

  markAlert.open(map, marker)
  map.setCenter(position)
  return [marker, markAlert]
}

// 카카오맵 클릭 이벤트
export const clickEvent = (mouseEvent, marker, iw) => {
  iw.close()
  marker.getPosition()

  const latlng = mouseEvent.latLng
  marker.setPosition(latlng)

  return latlng
}

// * 여기서부턴 get_kakaomap.js
export const setMarkers = (map, positions) => {
  const markers = []
  for (let i = 0; i < positions.length; i++) {
    const position = new kakao.maps.LatLng(positions[i].lat, positions[i].lng)
    const image = getCustomMarker(positions[i].src)
    const marker = new kakao.maps.Marker({
      map,
      position,
      image,
    })
    markers.push(marker)

    kakao.maps.event.addListener(marker, 'click', () => {
      console.log(`해당 마커의 좌표(La:위도, Ma:경도): `, position)
      console.log('서버랑 통신해야함')
    })
  }
  return markers
}

export const changeMarkerSize = (map, markers, positions) => {
  const mapLevel = map.getLevel()
  // console.log(mapLevel)
  if (mapLevel >= 9) {
    for (let i = 0; i < markers.length; i++) {
      let emotion = positions[i].src
      if (emotion === 'joy') emotion = joyMin
      else if (emotion === 'anger') emotion = angerMin
      else if (emotion === 'sadness') emotion = sadnessMin
      else if (emotion === 'disgust') emotion = disgustMin
      else emotion = fearMin

      const imageSize = new kakao.maps.Size(30, 35)
      const imageOption = { offset: new kakao.maps.Point(15, 37) }
      const marker = new kakao.maps.MarkerImage(emotion, imageSize, imageOption)
      markers[i].setImage(marker)
    }
  } else if (mapLevel >= 7) {
    for (let i = 0; i < markers.length; i++) {
      const marker = getCustomMarker(positions[i].src, true)
      markers[i].setImage(marker)
    }
  } else {
    for (let i = 0; i < markers.length; i++) {
      const marker = getCustomMarker(positions[i].src)
      markers[i].setImage(marker)
    }
  }
}
