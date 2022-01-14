import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import MapContainer from './MapContainer'
import { colors } from '../Header'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const DetailPostBackdrop = styled.div`
  @media only screen and (max-width: 1000px) {
    background-color: rgba(0, 0, 0, 0.75);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  /* overflow: scroll; */
  /* flex-wrap: nowrap; */
`

const DetailPost = styled.div`
  @media only screen and (max-width: 1000px) {
    max-width: 30rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin-bottom: 60px;
  width: 80%;
  height: 80%;
  flex-wrap: nowrap;
  background-color: white;
  border-radius: 5px;
  /* overflow: scroll; */
  /* min-width: 21rem; */
`

const PictureContainer = styled.div`
  position: relative;
  /* max-width: 370px; */
  width: 100%;
  max-height: 550px;
  height: 70%;
  margin-bottom: 10px;
  overflow: hidden;
`

const PictureWrapper = styled.div`
  /* transform: translateX(0); */
  width: ${props => props.len * 100}%;
  height: 100%;
  transition: ease 0.5s;
`

const Picture = styled.img`
  max-width: ${props => 100 / props.per}%;
  width: 100%;
  height: 100%;
`

const ArrowWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${props => props.left};
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 45px;
  cursor: pointer;
`
const ArrowIcon = styled(MdOutlineKeyboardArrowLeft)`
  width: 2rem;
  height: 2rem;
  transform: ${props => (props.rotate ? 'rotate(0.5turn)' : null)};
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`

const PictureAll = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

  min-width: 10px;
  width: max-content;
  height: max-content;
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  /* opacity: 1; */
`

const MiniImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`
const MoodWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`

const Mood = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: ${props => props.emColor};
  float: left;
`

const DetailContent = styled.div`
  margin: 1rem 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  width: 100%;
  max-width: 370px;
`

function DetailedPost() {
  const { id, mainImage, emotion, marker, content, lat, lng, allImage } = useSelector(
    state => state.rightbarReducer
  )
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(1)
  const pictureWrapperRef = useRef(null)
  const onPrevPic = () => {
    if (prev > 0) {
      pictureWrapperRef.current.style.transform = `translateX(${(next - 2) * 50}%)`
      setPrev(next - 2)
      setNext(prevState => prevState - 1)
    }
  }
  const onNextPic = () => {
    if (next < allImage.length) {
      pictureWrapperRef.current.style.transform = `translateX(${next * -50}%)`
      setPrev(next)
      setNext(prevState => prevState + 1)
    }
  }

  return (
    <DetailPostBackdrop>
      <DetailPost>
        <PictureContainer>
          <PictureWrapper len={allImage.length} ref={pictureWrapperRef}>
            {allImage.map(src => {
              return <Picture src={src} key={v4()} per={allImage.length} />
            })}
          </PictureWrapper>
          <ArrowWrapper left="0px" onClick={onPrevPic} leftBtn>
            <ArrowIcon />
          </ArrowWrapper>
          <ArrowWrapper left="calc(100% - 40px)" onClick={onNextPic}>
            <ArrowIcon rotate="true" />
          </ArrowWrapper>
          {/* <PictureAll>
            {allImage.map(src => {
              return <MiniImage src={src} key={v4()} />
            })}
          </PictureAll> */}
        </PictureContainer>
        <MoodWrapper>
          {emotion.map(em => {
            return <Mood key={v4()} emColor={colors[em]} />
          })}
        </MoodWrapper>
        <DetailContent>{content}</DetailContent>
        {/* <MapContainer lat={lat} lng={lng}></MapContainer> */}
      </DetailPost>
    </DetailPostBackdrop>
  )
}

export default DetailedPost
