import {React, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import MapType from '../MapType' 
import dummydata from '../../dummy/dummydata'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'
import './Test.css'

const HoverPosts = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-family: serif;
  font-weight: bold;
  width: 20rem;
  height: 27rem;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  margin: 10pt;
  
  float: left;
`
const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
  &:hover {
    cursor: pointer;
  }
`

const CreatedAt = styled.div`
  text-align: left;
  margin: 0.5rem 1rem;
`

const DetailedMood = styled.div`
  text-align: right;
  margin: 0.5rem;
`
const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`
const HoverPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 20rem;
  margin: 1rem;
  flex-wrap: nowrap;
  overflow: hidden;
`
const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 20rem;
  margin: 1.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`
const Picture = styled.img`
  width: 100%;
  height: 100%;
`

export default function Test () {
  const [isHover, setIsHover] = useState(false) // 
  
  const hideStyle = {display: 'none'}
  const state = useSelector(state => state.loginReducer)
  const postState = useSelector(state => state.postReducer)
  const { isLogin } = state
  const { isDiary } = postState


  const moods = picture => {

    let mood = []

    for (let i=0;i<picture.length;i++) {
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

  const test = () => {
    if (isLogin) {
      if (isDiary) {
        return (
          <>
            {dummydata.map(post => (
              <>
                <HoverPosts key={post.id} className={`hover ${isHover ? 'true': 'false'}`}>

                  <CreatedAt>{post.createdAt[0]}.{post.createdAt[1]}.{post.createdAt[2]}</CreatedAt>
                  <DetailedMood>{moods(post.mood)}</DetailedMood>

                  <HoverPictureWrapper>
                    <Picture src={post.src} />
                  </HoverPictureWrapper>
                </HoverPosts>
                <Posts onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`hover ${isHover ? 'false': 'true'}`}>
                  <PictureWrapper key={post.id} onClick={() => {
                    dispatch(changeImage(post))
                    dispatch(detailedPostMode())}} >
                    <Picture src={post.src}  />
                  </PictureWrapper>
                </Posts>
              </>
            ))}
          </>         
        )
      } else {
        return (
          <MapType />
        )
      }
    }

  }  
  
  return (
    <>
      {test()}
    </>

  )
}