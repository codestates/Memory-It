import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

// import MapContainer from './MapContainer'
import { colors } from '../Header'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

window.oncontextmenu = event => {
  event.preventDefault()
  event.stopPropagation()
  console.log('우클릭 막아둠 ㅋㅋㄹㅃㅃ~')
  return false
}

export const DetailPostBackdrop = styled.div`
  @media only screen and (max-width: 1000px) {
    background-color: rgba(248, 249, 250);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`

export const DetailPost = styled.div`
  @media only screen and (max-width: 1000px) {
    max-width: 480px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  }
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 80%;
  height: 80%;
  flex-wrap: nowrap;
  background-color: white;
  border-radius: 5px;
`

const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 550px;
  height: 70%;
  margin-bottom: 10px;
  overflow: hidden;
  user-select: none;

  cursor: grab;
`

const PictureWrapper = styled.div`
  width: ${props => props.len * 100}%;
  height: 100%;
  transition: translate 0.2s;
  -webkit-transition: 0.2s;
`

const Picture = styled.img`
  /* @media only screen and (max-width: 1000px) {
    width: calc(${props => 100 / props.per}%);
  } */
  width: calc(${props => 100 / props.per}%);
  /* width: calc(${props => 99 / props.per}%); */
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

const MoodWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
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
  // * 1. 준비물
  const pictureContainerRef = useRef(null)
  const pictureWrapperRef = useRef(null)

  const isDragging = useRef(false)
  const currentIdx = useRef(0)
  const startPos = useRef(0)
  const animationId = useRef(0)
  const prevTranslateValue = useRef(0)
  const currentTranslateValue = useRef(0)

  // useEffect(() => {
  //   currentIdx.current = 0
  //   isDragging.current = false
  //   startPos.current = 0
  //   animationId.current = 0
  //   prevTranslateValue.current = 0
  //   currentTranslateValue.current = 0
  //   pictureWrapperRef.current.style.transform = 'translateX(0)'
  // }, [id, Date.now()])

  const onPrevPic = () => {
    if (currentIdx.current > 0) {
      pictureWrapperRef.current.style.transform = `translateX(${
        (currentIdx.current - 1) * pictureContainerRef.current.offsetWidth
      }px)`
      currentIdx.current -= 1
      setPositionByIndex()
    }
  }
  const onNextPic = () => {
    if (currentIdx.current < allImage.length - 1) {
      pictureWrapperRef.current.style.transform = `translateX(${
        (currentIdx.current + 1) * -pictureContainerRef.current.offsetWidth
      }px)`
      currentIdx.current += 1
      setPositionByIndex()
    }
  }

  const getPositionX = event => {
    if (event.type.includes('click')) {
      return event.pageX
    }
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }

  const setSliderPosition = () => {
    pictureWrapperRef.current.style.transform = `translateX(${currentTranslateValue.current}px)`
  }

  const animation = () => {
    setSliderPosition()
    if (isDragging.current) {
      requestAnimationFrame(animation)
    }
  }

  const setPositionByIndex = () => {
    currentTranslateValue.current =
      currentIdx.current * -pictureContainerRef.current.offsetWidth

    prevTranslateValue.current = currentTranslateValue.current
    setSliderPosition()
  }

  const touchStart = (e, idx) => {
    pictureContainerRef.current.style.cursor = 'grabbing'

    currentIdx.current = idx
    startPos.current = getPositionX(e)

    isDragging.current = true
    animationId.current = requestAnimationFrame(animation) // * ???
  }

  const touchEnd = () => {
    if (isDragging.current === true) {
      pictureContainerRef.current.style.cursor = 'grab'

      cancelAnimationFrame(animationId.current)
      isDragging.current = false

      const movedBy = currentTranslateValue.current - prevTranslateValue.current
      if (movedBy < -100 && currentIdx.current < allImage.length - 1) {
        currentIdx.current += 1
      }
      if (movedBy > 100 && currentIdx.current > 0) {
        currentIdx.current -= 1
      }
      setPositionByIndex()
    }
  }
  const touchMove = e => {
    if (isDragging.current) {
      const currentPosition = getPositionX(e)
      currentTranslateValue.current =
        prevTranslateValue.current + currentPosition - startPos.current
    }
  }

  return (
    <DetailPostBackdrop>
      <DetailPost>
        <PictureContainer ref={pictureContainerRef}>
          <PictureWrapper len={allImage.length} ref={pictureWrapperRef}>
            {allImage.map((src, idx) => {
              return (
                <Picture
                  src={src}
                  key={v4()}
                  per={allImage.length}
                  onDragStart={e => {
                    e.preventDefault()
                  }}
                  onTouchStart={e => touchStart(e, idx)}
                  onTouchEnd={touchEnd}
                  onTouchMove={touchMove}
                  onMouseDown={e => touchStart(e, idx)}
                  onMouseUp={touchEnd}
                  onMouseLeave={touchEnd}
                  onMouseMove={touchMove}
                />
              )
            })}
          </PictureWrapper>
          <ArrowWrapper left="0px" onClick={onPrevPic} leftBtn>
            <ArrowIcon />
          </ArrowWrapper>
          <ArrowWrapper left="calc(100% - 40px)" onClick={onNextPic}>
            <ArrowIcon rotate="true" />
          </ArrowWrapper>
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
