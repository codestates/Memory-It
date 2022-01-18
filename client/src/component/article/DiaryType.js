import { React, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { detailedPostMode } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { setLoadingIndicator } from '../../actions/rightbarActions'

export const diarytypeColors = ['#ffc619', '#6ABF7D', '#D9272E', '#6DABE4', '#AA7BC9']

const EmptyPosts = styled.div`
  @media only screen and (max-width: 1180px) {
    .msg-s-gs {
      display: none;
    }
  }
  @media only screen and (min-width: 1181px) {
    .msg-mobile-gs {
      display: none;
    }
  }
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

  .msg-mobile-gs,
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
      height: 7.5%;
      opacity: 0.85;
    }
    & ~ .date-pic {
      opacity: 1;
      left: 2%;
    }
  }
`

const Mood = styled.div`
  position: absolute;
  width: 11.2%;
  height: 0;
  right: ${props => props.offset * 14}%;
  background-color: ${props => props.color || 'lightgray'};
  transition: ${props => (props.offset + 1) * 0.2}s;
  opacity: 0;
  border-radius: 0 0 4px 4px;

  box-shadow: 0px 2px 3px ${props => props.color};
`

const Date = styled.div`
  @media only screen and (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 1000px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    font-size: 0.7rem;
  }
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -1%;
  top: 2%;
  width: 50px;
  height: 50px;
  opacity: 0;
  background-color: rgba(248, 249, 250, 0.6);
  border-radius: 5px;

  transition: 0.4s;
  /* font-size: 80%; */
`

const DiaryType = ({posts}) => {
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
  posts(userPosts)
  
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
                {first ? (
                  <Date className="date-pic">
                    {first.createdAt.split('T')[0].split('-')[2]}
                  </Date>
                ) : null}
                {first
                  ? first.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={diarytypeColors[v - 1]}
                        className={`mood-pic ${i}`}
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
                {second ? (
                  <Date className="date-pic">
                    {second.createdAt.split('T')[0].split('-')[2]}
                  </Date>
                ) : null}
                {second
                  ? second.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={diarytypeColors[v - 1]}
                        className={`mood-pic ${i}`}
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
                {third ? (
                  <Date className="date-pic">
                    {first.createdAt.split('T')[0].split('-')[2]}
                  </Date>
                ) : null}
                {third
                  ? third.emotions.map((v, i) => (
                      <Mood
                        key={v4()}
                        offset={i}
                        color={diarytypeColors[v - 1]}
                        className={`mood-pic ${i}`}
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
          <p className="msg-mobile-gs">하단의 연필버튼을 눌러 시작해보세요!</p>
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
