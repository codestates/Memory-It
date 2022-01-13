import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { welcomeMode } from '../../actions/index'
import { v4 } from 'uuid'
import MapContainer from './MapContainer'

const DetailedPostSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const Picture = styled.img`
  width: 80%;
  height: 300px;
`

const PictureAll = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10px;
  width: max-content;
  background-color: tomato;
  height: max-content;
  align-items: center;
  margin-top: 1rem;
  opacity: 0.5;
`

const MiniImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`

const Mood = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

const DetailContent = styled.div`
  margin: 1vh;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
`
const HorizenLine = styled.hr`
  width: 24vw;
  border: none;
  border: 1px solid #c4c4c4;
`
const ExitDetailedPost = styled.div`
  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`

function DetailedPost() {
  const dispatch = useDispatch()
  const postInfo = useSelector(state => state.rightbarReducer)
  // console.log(postInfo)
  const { id, mainImage, emotion, marker, content, lat, lng, allImage } = postInfo

  const handleExit = () => {
    dispatch(welcomeMode())
  }
  // console.log(allImage)
  return (
    <>
      <DetailedPostSection>
        <ExitDetailedPost onClick={handleExit}>X</ExitDetailedPost>
        <Picture src={mainImage}></Picture>
        <PictureAll>
          {allImage.map(src => {
            return <MiniImage src={src} key={v4()} />
          })}
        </PictureAll>
        {/* <DetailedMood>{moods()}</DetailedMood> */}
        <DetailContent>{content}</DetailContent>

        <HorizenLine />
        <MapContainer lat={lat} lng={lng}></MapContainer>
      </DetailedPostSection>
    </>
  )
}

export default DetailedPost
