import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { joy, anger, sadness, disgust, fear } from './mapResource'
import { errorMessage, geoOptions } from './mapResource'
import { options, displayMarker, clickEvent, getCustomMarker } from './mapResource'
import MapContainer from './MapContiner'
import { v4 } from 'uuid'
const { kakao } = window

const Getpost = () => {
  const [postInfo, setPostInfo] = useState({
    content: '받기전',
    emotion: [],
    lat: '',
    lng: '',
  })
  const [images, setImages] = useState([])

  const GetThePost = async () => {
    await axios
      // .get('http://localhost:8081/posts?type=diary&year=2022', {
      //   withCredentials: true,
      // })
      .get('http://localhost:8081/posts/11', {
        withCredentials: true,
      })
      .then(res => {
        console.log('들어온데이터', res.data.data.post)
        const { content, emotion, lat, lng } = res.data.data.post
        setImages(res.data.data.images)
        setPostInfo({
          ...postInfo,
          content: content,
          emotion: emotion,
          lat: lat,
          lng: lng,
        })
        console.log(res.data.data.post)
        console.log(images)
      })
      .catch(err => console.log(err))
  }

  const list = images.map(image => {
    return <img key={v4()} src={image} />
  })

  const MapContainer = props => {
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

  MapContainer

  useEffect(() => {
    MapContainer
  })

  return (
    <>
      <div>들오온값은?{postInfo.content}</div>
      <div>들어온 감정?{postInfo.emotion}</div>
      <div>들어온 좌표?{postInfo.lat}</div>
      <div>들어온 좌표2?{postInfo.lng}</div>
      <div>{list}</div>
      <div>
        <MapContainer Lat={postInfo.lat} Lng={postInfo.lng} />
      </div>
      <div>{list}</div>
      <input type="button" onClick={GetThePost} value="여기눌러봐"></input>
    </>
  )
}

export default Getpost
