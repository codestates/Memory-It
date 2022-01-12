import { React, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { changeImage, detailedPostMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import { useSelector, useDispatch } from 'react-redux'
// import yellowMood from '../../static/yellowMood.png'
// import greenMood from '../../static/greenMood.png'
// import redMood from '../../static/redMood.png'
// import blueMood from '../../static/blueMood.png'
// import violetMood from '../../static/violetMood.png'

const Posts = styled.div`
  @media only screen and (max-width: 965px) {
    justify-content: center;
    padding-left: 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 1rem;
  padding-left: 7%;
`

// const CreatedAt = styled.span`
//   text-align: left;
//   margin: 0.5rem 1rem;
// `

// const DetailedMood = styled.span`
//   text-align: right;
//   margin: 0.5rem;
// `
// const Mood = styled.img`
//   width: 25px;
//   height: 25px;
//   margin-right: 6px;
// `

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
  @media only screen and (max-width: 965px) {
    max-width: 22rem;
    width: 86%;
    height: calc(50vw - 10%);
  }
  @media only screen and (max-width: 670px) {
    width: 80%;
    height: 24rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  height: calc(50vw - 54%);
  border-radius: 20px;
  margin: 1rem;
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
  // const [isHovers, setIsHovers] = useState({
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  // })
  const [userPosts, setUserPosts] = useState([])
 

  useEffect(async () => {
  await axios.get('http://localhost:8081/posts?type=diary&year=2022',{
    withCredentials: true
  })
    .then(res => {
      setUserPosts(res.data.data)
    })
  },[])

  const inputData = () => {
    if (!userPosts.length) {
      setUserPosts(dummydata)
    }
  }

  // const moods = picture => {
  //   let mood = []

  //   for (let i = 0; i < picture.length; i++) {
  //     if (picture[i] === 1) {
  //       mood.push(<Mood src={yellowMood} />)
  //     }
  //     if (picture[i] === 2) {
  //       mood.push(<Mood src={greenMood} />)
  //     }
  //     if (picture[i] === 3) {
  //       mood.push(<Mood src={redMood} />)
  //     }
  //     if (picture[i] === 4) {
  //       mood.push(<Mood src={blueMood} />)
  //     }
  //     if (picture[i] === 5) {
  //       mood.push(<Mood src={violetMood} />)
  //     }
  //   }
  //   return mood
  // }


  return (
    <Posts>
      {inputData()}
      {userPosts.map(post => (

        <PictureWrapper
          key={post.id}
          onClick={() => {
            dispatch(changeImage(post))
            dispatch(detailedPostMode())
          }}
          // onMouseEnter={() => {
          //   setIsHovers({ ...isHovers, [post.id]: true })
          // }}
          // onMouseLeave={() => {
          //   setIsHovers({ ...isHovers, [post.id]: false })
          // }}
        >

          <Picture imageSrc={post.images} />
        </PictureWrapper>
      ))}
    </Posts>
  )
}

export default DiaryType
