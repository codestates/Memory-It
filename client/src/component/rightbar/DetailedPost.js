import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { colors } from '../Header'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import { welcomeMode } from '../../actions'
import { Wave, WaveBackDrop } from './DetailedPostWave'

window.oncontextmenu = event => {
  event.preventDefault()
  event.stopPropagation()
  return false
}

export const DetailPostBackdrop = styled.div`
  @media only screen and (max-width: 1000px) {
    background-color: rgba(248, 249, 250);
    max-width: 400px;
  }
  position: relative;
  display: flex;
  justify-content: center;

  align-items: center;
  width: 100%;
`

export const DetailPost = styled.div`
  @media only screen and (max-width: 1180px) {
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
    padding-bottom: min(600px, 150%);
    transform: translateY(-11%);
  }
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  width: 90%;

  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);

  overflow: hidden;
  height: 0;
  padding-bottom: 150%;

  transition: filter 0.4s;
`

export const PictureContainer = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;

  width: 100%;
  max-height: 550px;
  height: 65%;
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
  width: calc(${props => 100 / props.per}%);
  height: 100%;
`

const ArrowWrapper = styled.div`
  position: absolute;
  z-index: 51;

  display: none;
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
  position: absolute;
  z-index: 51;
  bottom: 29%;
  right: 10%;
  display: flex;
  flex: 1 0 0%;
  justify-content: flex-end;
`

const DateWrapper = styled(MoodWrapper)`
  left: 10%;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
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
  position: absolute;
  bottom: -4px;

  margin: 10px 0;
  width: 86%;

  border-radius: 10px;
  height: 27%;
  overflow: scroll;
  padding: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.3rem;
  background-color: rgb(248, 249, 250);
`

const RemoveIndicator = styled.div`
  position: absolute;
  z-index: 51;
  display: none;
  justify-content: center;
  align-items: center;
  top: 50%;
  /* left: 8.5%; */
  border-radius: 3px;
  transform: translateY(-50%);

  background-color: white;

  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  user-select: none;
  font-weight: bold;
  letter-spacing: 4px;
  /* height: 400px; */
  .msg {
    position: absolute;
    top: 23%;
    letter-spacing: 1px;
  }
`

const RemovePostText = styled.div`
  @media only screen and (max-width: 1180px) {
    bottom: 30%;
  }
  position: absolute;
  bottom: 30%;
  right: 0;
  width: 30px;
  height: 20px;
  color: lightgray;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: gray;
  }
`

const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: white;
  border-radius: 3px;
  margin: 4.5rem 1.5rem 0 1.5rem;
  transition: 0.2s;
  cursor: pointer;
  color: #898989;
  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  }
`
const UndoButton = styled(RemoveButton)``

function DetailedPost({ setRer }) {
  const dispatch = useDispatch()
  const { id, mainImage, emotion, marker, content, lat, lng, allImage, createdAt } =
    useSelector(state => state.rightbarReducer)

  const removerRef = useRef(null)
  const postCardRef = useRef(null)

  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)

  const pictureContainerRef = useRef(null)
  const pictureWrapperRef = useRef(null)

  const isDragging = useRef(false)
  const currentIdx = useRef(0)
  const startPos = useRef(0)
  const animationId = useRef(0)
  const prevTranslateValue = useRef(0)
  const currentTranslateValue = useRef(0)

  useEffect(() => {
    if (allImage.length > 1) {
      rightArrowRef.current.style.display = 'flex'
    }
  }, [id])

  const onPrevPic = () => {
    if (currentIdx.current <= 1) {
      leftArrowRef.current.style.display = 'none'
    }

    if (currentIdx.current > 0) {
      rightArrowRef.current.style.display = 'flex'

      pictureWrapperRef.current.style.transform = `translateX(${
        (currentIdx.current - 1) * pictureContainerRef.current.offsetWidth
      }px)`
      currentIdx.current -= 1
      setPositionByIndex()
    }
  }
  const onNextPic = () => {
    if (currentIdx.current >= allImage.length - 2) {
      rightArrowRef.current.style.display = 'none'
    }

    if (currentIdx.current < allImage.length - 1) {
      leftArrowRef.current.style.display = 'flex'

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
    if (currentIdx.current < 1) {
      leftArrowRef.current.style.display = 'none'
    } else {
      leftArrowRef.current.style.display = 'flex'
    }
    if (currentIdx.current >= allImage.length - 1) {
      rightArrowRef.current.style.display = 'none'
    } else {
      rightArrowRef.current.style.display = 'flex'
    }

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

  const tryRemove = e => {
    removerRef.current.style.width = '300px'
    removerRef.current.style.height = '25%'
    removerRef.current.style.display = 'flex'
    postCardRef.current.style.filter = 'blur(2px)'
    pictureContainerRef.current.style.pointerEvents = 'none'
  }
  const undoRemove = () => {
    postCardRef.current.style.filter = 'blur(0)'
    removerRef.current.style.display = 'none'
    removerRef.current.style.width = '0'
    removerRef.current.style.height = '0'
    pictureContainerRef.current.style.pointerEvents = 'auto'
  }
  const remove = id => {
    axios
      .delete(`${process.env.REACT_APP_SERVE}/posts/${id}`, { withCredentials: true })
      .then(res => console.log('successful'))
      .catch(err => console.error('server error'))

    setRer({})
    dispatch(welcomeMode())
  }

  return (
    <>
      <DetailPostBackdrop bg={emotion[0]}>
        <DetailPost ref={postCardRef}>
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
            <ArrowWrapper ref={leftArrowRef} left="0px" onClick={onPrevPic} leftBtn>
              <ArrowIcon />
            </ArrowWrapper>
            <ArrowWrapper
              ref={rightArrowRef}
              left="calc(100% - 40px)"
              onClick={onNextPic}
            >
              <ArrowIcon rotate="true" />
            </ArrowWrapper>
          </PictureContainer>
          <div style={{ display: 'flex', width: '80%' }}>
            <DateWrapper>{createdAt.split('T')[0]}</DateWrapper>
            <MoodWrapper>
              {emotion.map(em => {
                return <Mood key={v4()} emColor={colors[em]} />
              })}
            </MoodWrapper>
          </div>
          <DetailContent>{content}</DetailContent>
          <RemovePostText onClick={tryRemove}>삭제</RemovePostText>
        </DetailPost>
        <RemoveIndicator ref={removerRef}>
          <div className="msg">정말 지우시나요?</div>

          <UndoButton onClick={undoRemove}>취소</UndoButton>
          <RemoveButton onClick={() => remove(id)}>삭제</RemoveButton>
        </RemoveIndicator>
      </DetailPostBackdrop>
      <WaveBackDrop backdropColor={emotion[0]} bg={emotion[0]}>
        <Wave />
        <Wave className="wave-sec" />
        <Wave className="wave-third" />
      </WaveBackDrop>
    </>
  )
}

export default DetailedPost
