import { React, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { detailedPostMode } from '../../actions/index'

import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { setLoadingIndicator } from '../../actions/rightbarActions'

const colors = ['#F4E12E', '#6ABF7D', '#D9272E', '#6DABE4', '#AA7BC9']

const EmptyPosts = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  line-height: 0.5rem;

  .msg-md-gs {
    color: gray;
    font-size: 2rem;
  }
  .msg-s-gs {
    color: gray;
    font-size: 1.3rem;
  }
`

const Posts = styled.div`
  @media only screen and (max-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }
  display: flex;
  width: 100%;
  height: max-content;
  max-width: 1280px;
  padding: 1rem 0;
  flex-wrap: wrap;
`

const PostFloor = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-bottom: 10px;
  }
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  div:last-of-type {
    margin-right: 0px;
  }
`

const PictureWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-right: 10px;
  }
  flex: 1 0 0%;
  cursor: ${props => (props.exist ? 'pointer' : 'default')};

  margin-right: 1rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 34.6%;
  height: 0;
`

const Picture = styled.div`
  @media only screen and (max-width: 1180px) and (min-width: 1001px) {
    &.third {
      border-right: none;
    }
  }
  background: url(${props => (props.imageSrc ? props.imageSrc.images : null)});
  background-size: 105% 105%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  transition: 1s;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &:hover {
    transition: 3s;
    background-size: 112% 112%;
    & ~ .mood-pic {
      height: 10%;
    }
  }
`

const Mood = styled.div`
  position: absolute;
  width: 10%;
  height: 0;
  right: ${props => props.offset * 13}%;
  background-color: ${props => props.color || 'lightgray'};
  transition: ${props => (props.offset + 1) * 0.3}s;
  opacity: 0.85;
  border-radius: 0 0 7px 7px;
`

const DiaryType = () => {
  const dispatch = useDispatch()
  const [userPosts, setUserPosts] = useState([])
  const { rightBarRef, rer } = useOutletContext()

  const state = useSelector(state => state.changeUserPostReducer)
  const { userPostAPI } = state

  useEffect(async () => {
    await axios
      .get(userPostAPI, {
        withCredentials: true,
      })
      .then(res => {
        setUserPosts(res.data.data)
      })
      .catch(err => {
        console.log('server error!')
      })
  }, [userPostAPI, rer])

  const GetPost = async v => {
    if (!v) return

    dispatch(setLoadingIndicator())
    const { id, images, emotions, marker, content, lat, lng, createdAt } = v
    await axios
      .get(`http://localhost:8081/posts/${id}`, {
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
      .catch(err => console.error(err))
  }

  const rightOn = post => {
    if (!post) return
    else {
      rightBarRef.current.classList.add('selected')
      rightBarRef.current.classList.remove('hide')
    }
  }

  return (
    <Posts>
      {userPosts.length !== 0 ? (
        userPosts.map((v, i, arr) => {
          const first = arr[3 * parseInt(i / 3) + 0]
          const second = arr[3 * parseInt(i / 3) + 1]
          const third = arr[3 * parseInt(i / 3) + 2]
          return i % 3 === 0 ? (
            <PostFloor key={v4()}>
              <PictureWrapper
                exist={first}
                onClick={() => {
                  rightOn(first)
                  GetPost(first)
                }}
              >
                <Picture imageSrc={first} />
                {first
                  ? first.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={colors[v - 1]}
                        className="mood-pic"
                      />
                    ))
                  : null}
              </PictureWrapper>
              <PictureWrapper
                exist={second}
                onClick={() => {
                  rightOn(second)
                  GetPost(second)
                }}
              >
                <Picture imageSrc={second} />
                {second
                  ? second.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={colors[v - 1]}
                        className="mood-pic"
                      />
                    ))
                  : null}
              </PictureWrapper>
              <PictureWrapper
                exist={third}
                onClick={() => {
                  rightOn(third)
                  GetPost(third)
                }}
              >
                <Picture imageSrc={third} className="third" />
                {third
                  ? third.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={colors[v - 1]}
                        className="mood-pic"
                      />
                    ))
                  : null}
              </PictureWrapper>
            </PostFloor>
          ) : null
        })
      ) : (
        <EmptyPosts>
          <p className="msg-md-gs">아직 작성하신 글이 없으시군요!</p>
          <p className="msg-s-gs">상단바의 작성하기 버튼을 눌러 시작해보세요!</p>
          {/* <GettingStarted>
            <Pen className="pen-gs" />
            <div className="text-gs">시작하기</div>
          </GettingStarted> */}
        </EmptyPosts>
      )}
    </Posts>
  )
}

export default DiaryType
