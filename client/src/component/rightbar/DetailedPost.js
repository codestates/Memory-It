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
    max-width: 480px;
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
  user-select: none;

  cursor: grab;
`

const PictureWrapper = styled.div`
  /* transform: translateX(0); */
  width: ${props => props.len * 100}%;
  height: 100%;
  transition: 0.1s;
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
  const pictureContainerRef = useRef(null)
  const pictureWrapperRef = useRef(null)

  // const [isDragging, setIsDragging] = useState(false)
  // const [currentIdx, setCurrentIdx] = useState(0)

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

  const currentIdx = useRef(0)
  const isDragging = useRef(false)
  const startPos = useRef(0)
  const animationId = useRef(0)
  const prevTranslateValue = useRef(0)
  const currentTranslateValue = useRef(0)

  const getPositionX = event => {
    if (event.type.includes('click')) {
      return event.pageX
    }
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
  }

  const setSliderPosition = (e, arrow) => {
    // console.log(animationId.current)
    if (arrow === 'prev') {
      if (currentIdx.current > 0) {
        prevTranslateValue.current =
          (currentIdx.current - 1) * -pictureContainerRef.current.offsetWidth

        pictureWrapperRef.current.style.transform = `translateX(${
          (currentIdx.current - 1) * 50
        }%)`
        currentIdx.current -= 1
      }
    } else if (arrow === 'next') {
      if (currentIdx.current < allImage.length - 1) {
        prevTranslateValue.current =
          (currentIdx.current + 1) * -pictureContainerRef.current.offsetWidth

        pictureWrapperRef.current.style.transform = `translateX(${
          (currentIdx.current + 1) * -50
        }%)`
        currentIdx.current += 1
      }
    } else {
      pictureWrapperRef.current.style.transform = `translateX(${currentTranslateValue.current}px)`
    }
  }

  const animation = () => {
    setSliderPosition()
    if (isDragging.current) {
      // console.log('드레그 애니메이션 재귀')
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
    currentIdx.current = idx
    startPos.current = getPositionX(e)

    isDragging.current = true
    animationId.current = requestAnimationFrame(animation) // * ???
    // console.log('aniID: ', animationId.current)
  }

  const touchEnd = () => {
    if (isDragging.current === true) {
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
          <ArrowWrapper
            left="0px"
            onClick={e => {
              setSliderPosition(e, 'prev')
            }}
            leftBtn
          >
            <ArrowIcon />
          </ArrowWrapper>
          <ArrowWrapper
            left="calc(100% - 40px)"
            onClick={e => {
              setSliderPosition(e, 'next')
            }}
          >
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
