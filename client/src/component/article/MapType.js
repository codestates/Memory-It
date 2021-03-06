import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detailedPostMode } from '../../actions/index'
import { joy, anger, sadness, disgust, fear } from '../../servertest/mapResource'
import { EmptyPosts } from './DiaryType'
import { setLoadingIndicator } from '../../actions/rightbarActions'

const MapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Map = styled.div``

function MapType() {
  const { userPost } = useSelector(state => state.updateUserpostReducer)
  const dispatch = useDispatch()
  const { rightBarRef, rer, filteredColor } = useOutletContext()

  useEffect(() => {
    if (userPost.length) {
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

      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(userPost[0].lat, userPost[0].lng),
        level: 9,
      }

      const map = new kakao.maps.Map(container, options)

      const markerImageSelect = element => {
        switch (element) {
          case 1:
            return joy
          case 2:
            return disgust
          case 3:
            return anger
          case 4:
            return sadness
          case 5:
            return fear
        }
      }

      // ?????? ?????? ????????? ?????? ??? ????????? ???????????? ????????????
      const markers = []
      const getMarkerImage = () => {
        for (let i = 0; i < userPost.length; i++) {
          const imageSize = new kakao.maps.Size(64, 69)
          const imageSrc = markerImageSelect(userPost[i].emotions[0])
          const imageOption = { offset: new kakao.maps.Point(27, 69) }
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
          const markerPosition = new kakao.maps.LatLng(userPost[i].lat, userPost[i].lng)
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          })
          marker.setMap(map)
          kakao.maps.event.addListener(marker, 'click', async () => {
            dispatch(setLoadingIndicator())
            rightBarRef.current.classList.add('selected')
            rightBarRef.current.classList.remove('hide')
            const { id, images, emotions, marker, content, lat, lng, createdAt } =
              userPost[i]
            await axios
              .get(`${process.env.REACT_APP_SERVE}/posts/${id}`, {
                withCredentials: true,
              })
              .then(res => {
                const allImage = res.data.data.images
                dispatch(
                  detailedPostMode(
                    id,
                    images,
                    emotions,
                    marker,
                    content,
                    lat,
                    lng,
                    allImage,
                    createdAt
                  )
                )
              })
          })
          markers.push(marker)
        }
      }
      getMarkerImage()

      // ????????? ?????? ?????? ??????
      const getCustomMarker = (emotion, small = false) => {
        if (emotion === 1) emotion = joy
        else if (emotion === 2) emotion = disgust
        else if (emotion === 3) emotion = anger
        else if (emotion === 4) emotion = sadness
        else emotion = fear

        const imageSize = !small
          ? new kakao.maps.Size(64, 69)
          : new kakao.maps.Size(40, 45)
        const imageOption = {
          offset: !small ? new kakao.maps.Point(27, 69) : new kakao.maps.Point(20, 48),
        }
        return new kakao.maps.MarkerImage(emotion, imageSize, imageOption)
      }

      let mapTypeControl = new kakao.maps.MapTypeControl()

      // ????????? ???????????? ???????????? ???????????? ???????????????
      // kakao.maps.ControlPosition??? ???????????? ????????? ????????? ??????????????? TOPRIGHT??? ????????? ?????? ???????????????
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

      // ?????? ?????? ????????? ????????? ??? ??????  ??? ???????????? ???????????????
      let zoomControl = new kakao.maps.ZoomControl()
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

      // ??? ????????? ?????? ?????? ??????
      kakao.maps.event.addListener(map, 'zoom_changed', () => {
        const mapLevel = map.getLevel()
        if (mapLevel >= 9) {
          let index = 0
          for (let i = 0; i < userPost.length; i++) {
            let emotion = userPost[i].emotions[0]
            if (emotion === 1) emotion = joyMin
            else if (emotion === 2) emotion = disgustMin
            else if (emotion === 3) emotion = angerMin
            else if (emotion === 4) emotion = sadnessMin
            else emotion = fearMin
            const imageSize = new kakao.maps.Size(30, 35)
            const imageOption = { offset: new kakao.maps.Point(15, 37) }
            const marker = new kakao.maps.MarkerImage(emotion, imageSize, imageOption)
            markers[index].setImage(marker)
            index++
          }
        } else if (mapLevel >= 7) {
          let index = 0
          for (let i = 0; i < userPost.length; i++) {
            const marker = getCustomMarker(userPost[i].emotions[0], true)
            markers[index].setImage(marker)
            index++
          }
        } else {
          let index = 0
          for (let i = 0; i < userPost.length; i++) {
            const marker = getCustomMarker(userPost[i].emotions[0], false)
            markers[index].setImage(marker)
            index++
          }
        }
      })
    }
  }, [])
  return (
    <>
      {userPost.length ? (
        <MapSection id="map"></MapSection>
      ) : (
        <EmptyPosts>
          <p className="msg-md-gs">?????? ???????????? ?????? ???????????????!</p>
          <p className="msg-s-gs">???????????? ???????????? ????????? ?????? ??????????????????!</p>
          <p className="msg-mobile-gs">????????? ??????????????? ?????? ??????????????????!</p>
        </EmptyPosts>
      )}
    </>
  )
}

export default MapType
