import { React, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { detailedPostMode, welcomeMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { setLoadingIndicator } from '../../actions/rightbarActions'

const Posts = styled.div`
  @media only screen and (max-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }
  display: flex;
  width: 100%;
  max-width: 1280px;
  padding: 1.5rem;
  flex-wrap: wrap;

  /* min-height: 100vh; */
  /* overflow: scroll; */
`

const CreatedAt = styled.span`
  text-align: left;
  margin: 0.5rem 1rem;
`

const DetailedMood = styled.span`
  text-align: right;
  margin: 0.5rem;
`

const PostFloor = styled.div`
  @media only screen and (min-width: 2020px) {
    /* height: 517px; */
  }
  @media only screen and (max-width: 1180px) {
    /* height: calc(50vw - 50%); */
  }
  @media only screen and (max-width: 1000px) {
    margin-bottom: 10px;
    div:last-of-type {
      border-right: none;
    }
  }
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  div:last-of-type {
    margin-right: 0px;
  }

  /* background: gray; */
  /* height: 100px; */
  /* max-height: 517px; */
  /* height: calc(15vw - 20px); */
  /* height: auto; */
`

const PictureWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    margin-right: 10px;
    /* div {
      border: none;
    } */
  }
  margin-right: 1.5rem;
  flex: 1 0 0%;
  cursor: pointer;

  position: relative;
  /* width: 100%; */
  /* height: 0; */
  overflow: hidden;
  padding-bottom: 34.6%;
  /* height: 100%; */
  /* height: auto; */
`

const Picture = styled.div`
  @media only screen and (max-width: 1180px) {
    &.third {
      border-right: none;
    }
  }
  background: url(${props => (props.imageSrc ? props.imageSrc.images : null)});
  background-size: 105% 105%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  transition: 1s;
  border: ${props => (props.imageSrc ? '1px solid lightgray' : 'none')};
  &:hover {
    transition: 3s;
    background-size: 114% 114%;
  }

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* align-items: stretch; */
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
        console.log(res.data.data)
        setUserPosts(res.data.data)
      })
      .catch(err => {
        console.log('server error! dummydata loading')
        setUserPosts(dummydata)
      })
  }, [userPostAPI])

  const GetPost = async v => {
    console.log(v)
    if (!v) return

    dispatch(setLoadingIndicator())
    const { id, images, emotions, marker, content, lat, lng } = v
    await axios
      .get(`http://localhost:8081/posts/${id}`, {
        withCredentials: true,
      })
      .then(res => {
        const allImage = res.data.data.images
        dispatch(
          detailedPostMode(id, images, emotions, marker, content, lat, lng, allImage)
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
      {userPosts.map((v, i, arr) => {
        return i % 3 === 0 ? (
          <PostFloor key={v4()}>
            <PictureWrapper
              onClick={() => {
                rightOn(arr[3 * parseInt(i / 3) + 0])
                GetPost(arr[3 * parseInt(i / 3) + 0])
              }}
            >
              <Picture imageSrc={arr[3 * parseInt(i / 3) + 0]} />
            </PictureWrapper>
            <PictureWrapper
              onClick={() => {
                rightOn(arr[3 * parseInt(i / 3) + 1])
                GetPost(arr[3 * parseInt(i / 3) + 1])
              }}
            >
              <Picture imageSrc={arr[3 * parseInt(i / 3) + 1]} />
            </PictureWrapper>
            <PictureWrapper
              onClick={() => {
                rightOn(arr[3 * (i / 3) + 2])
                GetPost(arr[3 * (i / 3) + 2])
              }}
            >
              <Picture imageSrc={arr[3 * parseInt(i / 3) + 2]} className="third" />
            </PictureWrapper>
          </PostFloor>
        ) : null
      })}
    </Posts>
  )
}

export default DiaryType
