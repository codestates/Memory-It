import { React, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { detailedPostMode, welcomeMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'

const Posts = styled.div`
  @media only screen and (max-width: 1900px) {
    padding-left: 5.5%;
  }
  /* @media only screen and (max-width: 965px) {
    padding-left: 2%;
  } */
  /* @media only screen and (min-width: 901px) and (max-width: 965px) {
    padding-left: 2%;
  } */
  @media only screen and (max-width: 900px) {
    padding-left: 10%;
  }
  /* @media only screen and (max-width: 500px) {
    justify-content: center;
    padding-left: 0;
  } */
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 1rem;
  padding-left: 7%;
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

const Picture = styled.div`
  background: url(${props => props.imageSrc || null});
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:hover {
    transition: 3s;
    background-size: 110% 110%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    height: calc(50vw - 40%);
  }
  /* @media only screen and (max-width: 965px) {
    max-width: 22rem;
    width: 86%;
    height: calc(50vw - 10%);
  } */
  @media only screen and (max-width: 900px) {
    /* min-width: 200px; */
    width: 24%;
    height: calc(25vw);
  }
  @media only screen and (max-width: 650px) {
    width: 40%;
    height: calc(40vw);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  height: calc(50vw - 54%);
  border-radius: 20px;
  margin: 1rem 3%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1481px) {
    width: 28%;
    height: calc(50vw - 75%);
  }
`

const DiaryType = () => {
  const dispatch = useDispatch()
  const [userPosts, setUserPosts] = useState([])
  const rightBarRef = useOutletContext()
  const rightOn = () => {
    rightBarRef.current.classList.add('selected')
    rightBarRef.current.classList.remove('hide')
  }
//   const [data, setData] = useState([])
//   const [postNumber, setPostNumber] = useState(1)
  
  const state = useSelector(state => state.changeUserPostReducer)
  const { userPostAPI } = state
  useEffect(async () => {
  await axios.get(userPostAPI,{
    withCredentials: true
  })
    .then(res => {
      setUserPosts(res.data.data)
    })
    .catch(err => {
      console.log('server error! dummydata loading')
      setUserPosts(dummydata)
    })
  },[userPostAPI])

//   useEffect(async () => {
//     // console.log(rightBarRef)
//     await axios
//       .get('http://localhost:8081/posts?type=diary&year=2022', {
//         withCredentials: true,
//       })
//       .then(res => {
//         // console.log(res.data.data)
//         setUserPosts(res.data.data)
//       })
//       .catch(err => {
//         console.log('server error! dummydata loading')
//         setUserPosts(dummydata)
//       })
//   }, [])

  const GetPost = async (id, images, emotion, marker, content, lat, lng) => {
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

  return (
    <Posts>
      {userPosts.map(({ id, images, emotion, marker, content, lat, lng }) => (
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
      ))}
    </Posts>
  )
}

export default DiaryType
