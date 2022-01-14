import { React, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { detailedPostMode, welcomeMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'

const DiaryTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  height: max-content;
`

const Posts = styled.div`
  @media only screen and (max-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  overflow: scroll;
  padding: 1.5rem;

  /* flex-wrap: wrap; */
  /* padding-left: 7%; */
  /* @media only screen and (max-width: 1900px) {
    padding-left: 5.5%;
  }
  @media only screen and (max-width: 900px) {
    padding-left: 10%;
  } */
  /* align-content: flex-start; */
`

const CreatedAt = styled.span`
  text-align: left;
  margin: 0.5rem 1rem;
`

const DetailedMood = styled.span`
  text-align: right;
  margin: 0.5rem;
`
const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: calc(50vw - 54%);
  border-radius: 20px;
  overflow: hidden;
  flex: 1 0 0%;
  &:hover {
    cursor: pointer;
  }
  /* @media only screen and (min-width: 1481px) {
    width: 28%;
    height: calc(50vw - 75%);
  }
  @media only screen and (max-width: 1180px) {
    height: calc(50vw - 40%);
  }
  @media only screen and (max-width: 900px) {
    width: 24%;
    height: calc(25vw);
  }
  @media only screen and (max-width: 650px) {
    width: 40%;
    height: calc(40vw);
  } */
  /* width: 42%; */
  /* margin: 1rem 3%; */
`

const Picture = styled.div`
  background: url(${props => props.imageSrc || null});
  background-size: 105% 105%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:hover {
    transition: 3s;
    background-size: 114% 114%;
  }
`
const PostFloor = styled.div`
  @media only screen and (min-width: 2020px) {
    height: 517px;
  }
  @media only screen and (max-width: 1180px) {
    height: calc(50vw - 50%);
  }
  @media only screen and (max-width: 1000px) {
    height: calc(50vw - 15%);
  }
  @media only screen and (max-width: 500px) {
    height: calc(50vw - 10%);
  }
  /* @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 200vh;

    div {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  } */
  display: flex;
  width: 100%;
  max-height: 517px;
  height: calc(50vw - 70%);
  div:last-of-type {
    margin-right: 0px;
  }
`

const Post = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-right: 10px;
  }
  /* align-self: center; */
  height: 100%;
  margin-right: 20px;
  flex: 1 0 0%;
  cursor: pointer;
`

const DiaryType = () => {
  const dispatch = useDispatch()
  const [userPosts, setUserPosts] = useState([])
  const rightBarRef = useOutletContext()

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
        console.log('server error! dummydata loading')
        setUserPosts(dummydata)
      })
  }, [userPostAPI])

  const GetPost = async v => {
    if (!v) return

    console.log(v)
    const { id, images, emotion, marker, content, lat, lng } = v
    await axios
      .get(`http://localhost:8081/posts/${id}`, {
        withCredentials: true,
      })
      .then(res => {
        const allImage = res.data.data.images
        dispatch(
          detailedPostMode(id, images, emotion, marker, content, lat, lng, allImage)
        )
      })
  }

  const rightOn = () => {
    rightBarRef.current.classList.add('selected')
    rightBarRef.current.classList.remove('hide')
  }

  return (
    <Posts>
      {userPosts.map((v, i, arr) => {
        return i / 3 === 0 ? (
          <PostFloor key={v4()} className="test">
            <Post
              onClick={() => {
                rightOn()
                dispatch(welcomeMode())
                GetPost(arr[3 * (i / 3) + 0])
              }}
            >
              <Picture imageSrc={arr[3 * (i / 3) + 0].images} />
            </Post>
            <Post
              onClick={() => {
                rightOn()
                dispatch(welcomeMode())
                GetPost(arr[3 * (i / 3) + 1])
              }}
            >
              <Picture imageSrc={arr[3 * (i / 3) + 1].images} />
            </Post>
            <Post
              onClick={() => {
                rightOn()
                dispatch(welcomeMode())
                GetPost(arr[3 * (i / 3) + 2])
              }}
            >
              <Picture imageSrc={arr[3 * (i / 3) + 2].images} />
            </Post>
          </PostFloor>
        ) : null
      })}
      {/* {userPosts.map(({ id, images, emotion, marker, content, lat, lng }) => (
        <PictureWrapper
          key={v4()}
          onClick={() => {
            rightOn()
            dispatch(welcomeMode())
            GetPost(id, images, emotion, marker, content, lat, lng)
          }}
        >
          <Picture imageSrc={images} />
        </PictureWrapper>
      ))} */}
    </Posts>
  )
}

export default DiaryType
