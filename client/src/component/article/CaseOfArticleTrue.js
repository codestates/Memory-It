import {React, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeImage, detailedPostMode } from '../../actions'
import MapType from '../MapType' 
import dummydata from '../../dummy/dummydata'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'


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
  margin: 1.3rem;
  float: left;
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
  width: 17rem;
  height: 20rem;
  &:hover {
    cursor: pointer;
  }
`

export default function Test () {
  const [isHovers, setIsHovers] = useState({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  })
  console.log(isHovers[1])
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

  const dispatch = useDispatch()

  const test = () => {
    if (isLogin) {
      if (isDiary) {
        return (
          <>
            {dummydata.map(post => (
              <>
                <HoverPosts key={post.id}>
                  {isHovers[post.id] ? <><CreatedAt>{post.updatedAt[0]}.{post.updatedAt[1]}.{post.updatedAt[2]}</CreatedAt>
                  <DetailedMood>{moods(post.mood)}</DetailedMood> </> : null}
                  <PictureWrapper  onClick={() => {
                    dispatch(changeImage(post))
                    dispatch(detailedPostMode())}} 
                    onMouseEnter={() => {setIsHovers({...isHovers, [post.id]: true})}}
                    onMouseLeave={() => {setIsHovers({...isHovers, [post.id]: false})}}>
                    <Picture src={post.src}  />
                  </PictureWrapper>
                </HoverPosts>
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