import axios from 'axios'
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
  const img = useRef(null)

  const [fileUrl, setFileUrl] = useState([])
  const [imgTitle, setImgTitle] = useState([])

  const [timeCheck, timeChecker] = useState()
  const [marker, setMarker] = useState()
  const [postInfo, setPostInfo] = useState({
    content: '',
    emotion: [],
    lat: '',
    lng: '',
  })

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
            setPostInfo({ ...postInfo, lat, lng })
          })

          kakao.maps.event.addListener(marker, 'dragstart', () => {
            markAlert.close()
          })

          kakao.maps.event.addListener(marker, 'dragend', () => {
            const { La: lat, Ma: lng } = marker.getPosition()
            // console.log(`위도:${lat} & '경도:${lng}`)
            setPostInfo({ ...postInfo, lat, lng })
          })

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

  const onClick = (src, num) => {
    const selectedEmotions = postInfo.emotion
    const eIdx = selectedEmotions.indexOf(num)
    if (eIdx >= 0) {
      selectedEmotions.splice(eIdx, 1)
    } else {
      selectedEmotions.push(num)
    }
    setPostInfo({
      ...postInfo,
      emotion: selectedEmotions,
    })
    const markerImage = getCustomMarker(src)
    marker.setImage(markerImage)
  }

  const writing = e => {
    setPostInfo({
      ...postInfo,
      content: e.target.value,
    })
  }

  const serve = e => {
    e.preventDefault()
    const image = img.current.files
    // console.log(image[0])
    // const url = URL.createObjectURL(image[0])
    // setTTT(url)

    const formData = new FormData()
    for (let i = 0; i < image.length; i++) {
      formData.append('postingImages', image[i])
    }
    formData.append('data', JSON.stringify(postInfo))

    axios
      .post('http://172.30.1.51:8081/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      .then(res => console.log(res))
      .catch(err => {
        console.error(err.message)
      })
  }

  const processImage = event => {
    const imageFile = event.target.files
    const fileName = imageFile.name
    const files = []
    let filesNames = []

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      const imageName = imageFile[i].name
      files.push(imageUrl)
      filesNames.push(imageName)
    }
    setFileUrl(files)
    setImgTitle(filesNames)
  }

  return (
    <>
      <MapWrapper id="map" ref={container}></MapWrapper>
      <p>사용자 위치 정보를 가져오는대 걸린시간: {timeCheck ?? '위치탐색중..'} </p>
      <input
        type="file"
        ref={img}
        accept="image/*"
        name="postingImages"
        onChange={processImage}
        formEncType="multipart/form-data"
        multiple
      ></input>
      <textarea onChange={writing}></textarea>
      <br />
      <Button onClick={() => onClick(joy, 1)}>기쁨</Button>
      <Button onClick={() => onClick(sadness, 4)}>슬픔</Button>
      <Button onClick={() => onClick(anger, 3)}>화남</Button>
      <Button onClick={() => onClick(disgust, 2)}>짜증</Button>
      <Button onClick={() => onClick(fear, 5)}>불안</Button>
      <br />
      <br />
      <button onClick={serve}>전송</button>
    </>
  )
}

export default PostKakaomapTester
