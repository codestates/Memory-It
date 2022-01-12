import { React, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useDispatch } from 'react-redux' 
import { changeImage, detailedPostMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
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
  border-radius: 20px;
  &:hover {
    transition: 3s;
    background-size: 110% 110%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 670px) {
    min-width: 17rem;
    max-width: 25rem;
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18rem;
  max-width: 19rem;

  width: calc(50% - 3rem);
  height: 23rem;
  margin: 1.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`

const DiaryType = () => {
  const [isHovers, setIsHovers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  })

  let data = []
  useEffect(async () => {
  await axios.get('http://localhost:8081/posts?type=diary&year=2022',{
    withCredentials: true
  })
    .then(res => {
      data = res.data.data
    })
  })
  const inputData = () => {
    if (!data.hasOwnProperty('src')) {
      data = dummydata
    }
  }

  const moods = picture => {
    let mood = []

    for (let i = 0; i < picture.length; i++) {
      if (picture[i] === 1) {
        mood.push(<Mood src={yellowMood} />)
      }
      if (picture[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (picture[i] === 3) {
        mood.push(<Mood src={redMood} />)
      }
      if (picture[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (picture[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }

  const dispatch = useDispatch() 

  return (
    <Posts>
      {inputData()}
      {data.map(post => (


        <PictureWrapper
          key={post.id}
          onClick={() => {
            dispatch(changeImage(post))
            dispatch(detailedPostMode())
          }}
          onMouseEnter={() => {
            setIsHovers({ ...isHovers, [post.id]: true })
          }}
          onMouseLeave={() => {
            setIsHovers({ ...isHovers, [post.id]: false })
          }}
        >

          <Picture imageSrc={post.src} />
        </PictureWrapper>
      ))}
    </Posts>
  )
}

export default DiaryType
