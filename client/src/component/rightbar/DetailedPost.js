import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

// import MapContainer from './MapContainer'
import { colors } from '../Header'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import { welcomeMode } from '../../actions'

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
  background-color: rgba(248, 249, 250);
`

export const DetailPost = styled.div`
  @media only screen and (max-width: 1000px) {
    max-width: 480px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  }

  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 5px;

  /* box-shadow: 2px 4px 5px rgba(255, 153, 0, 0.5); */
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
`

const PictureContainer = styled.div`
  position: relative;
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
  /* display: flex; */
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
  display: flex;
  width: 100%;
  /* height: 10%; */
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
  margin: 10px 0;
  /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
  /* font-weight: bold; */
  width: 90%;
  border-radius: 20px;
  height: 25%;
  overflow: scroll;
  padding: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.3rem;
  /* max-width: 370px; */
  background-color: rgb(248, 249, 250);
`

const RemoveIndicator = styled.div`
  position: absolute;
  display: none;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  width: 0;
  height: 0;
  top: 50%;
  border-radius: 20px;
  transform: translateY(-50%);
  background-color: rgba(128, 128, 128, 0.9);
  user-select: none;
  font-weight: bold;
  letter-spacing: 4px;

  .msg {
    position: absolute;
    top: 15%;
    letter-spacing: 1px;
    color: white;
  }
`

const RemovePostText = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 20px;
  color: lightgray;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: tomato;
  }
`

const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  background-color: tomato;
  border-radius: 10px;
  margin-top: 40px;

  /* font-size: 1.2rem; */
  transition: 0.2s;
  color: white;
  cursor: pointer;

  /* box-shadow: 1px 2px 4px rgba(235, 60, 39, 0.5); */

  &:hover {
    margin-bottom: 10px;
  }
`
const UndoButton = styled(RemoveButton)`
  /* box-shadow: 1px 2px 4px rgba(255, 255, 255, 0.5); */
  color: inherit;
  background-color: lightgray;
`

function DetailedPost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, mainImage, emotion, marker, content, lat, lng, allImage } = useSelector(
    state => state.rightbarReducer
  )

  const removerRef = useRef(null)

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
    removerRef.current.style.width = '70%'
    removerRef.current.style.height = '35%'
    removerRef.current.style.display = 'flex'
    // removerRef.current.style.pointerEvents = 'auto'
    pictureContainerRef.current.style.filter = 'blur(5px)'
  }
  const undoRemove = () => {
    pictureContainerRef.current.style.filter = 'blur(0)'
    removerRef.current.style.display = 'none'
    removerRef.current.style.width = '0'
    removerRef.current.style.height = '0'
  }
  const remove = id => {
    // console.log(id)
    axios
      .delete(`http://localhost:8081/posts/${id}`, { withCredentials: true })
      .then(res => console.log(res))
      .catch(err => console.error(err))

    dispatch(welcomeMode())
    navigate('/')
  }

  return (
    <DetailPostBackdrop bg={emotion[0]}>
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
          <ArrowWrapper ref={leftArrowRef} left="0px" onClick={onPrevPic} leftBtn>
            <ArrowIcon />
          </ArrowWrapper>
          <ArrowWrapper ref={rightArrowRef} left="calc(100% - 40px)" onClick={onNextPic}>
            <ArrowIcon rotate="true" />
          </ArrowWrapper>
        </PictureContainer>
        <MoodWrapper>
          {emotion.map(em => {
            return <Mood key={v4()} emColor={colors[em]} />
          })}
        </MoodWrapper>
        <DetailContent>{content}</DetailContent>
        <RemoveIndicator ref={removerRef}>
          <div className="msg">삭제시 복구가 불가능합니다</div>

          <UndoButton onClick={undoRemove}>취소</UndoButton>
          <RemoveButton onClick={() => remove(id)}>삭제</RemoveButton>
        </RemoveIndicator>
        <RemovePostText onClick={tryRemove}>삭제</RemovePostText>
      </DetailPost>
    </DetailPostBackdrop>
  )
}

export default DetailedPost
