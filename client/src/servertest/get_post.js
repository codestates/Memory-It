import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { joy, anger, sadness, disgust, fear } from './mapResource'
import { errorMessage, geoOptions } from './mapResource'
import { options, displayMarker, clickEvent, getCustomMarker } from './mapResource'

const Getpost = () => {
  const [postInfo, setPostInfo] = useState({
    content: '받기전',
    emotion: [],
    lat: '',
    lng: '',
  })
  const [images, setImages] = useState([])

  const GetThePost = () => {
    axios
      // .get('http://localhost:8081/posts?type=diary&year=2022', {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   withCredentials: true,
      // })
      .get('http://localhost:8081/posts/11', {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        withCredentials: true,
      })
      .then(res => {
        //   console.log('들어온데이터', res.data.data.post)
        const { content, emotion, lat, lng } = res.data.data.post
        setImages(res.data.data.images)
        setPostInfo({
          ...postInfo,
          content: content,
          emotion: emotion,
          lat: lat,
          lng: lng,
        })
        //   console.log(postInfo)
      })
      .catch(err => console.log(err))
  }

  //   useEffect(() => {
  //     // console.log('바뀐데이터', postInfo)
  //     postInfo
  //   })
  return (
    <>
      <div>들오온값은?{postInfo.content}</div>
      <div>들어온 감정?{postInfo.emotion}</div>
      <div>들어온 좌표?{postInfo.lat}</div>
      <div>들어온 좌표2?{postInfo.lng}</div>
      <img src={images} />
      <input type="button" onClick={GetThePost} value="여기눌러봐"></input>
    </>
  )
}

export default Getpost
