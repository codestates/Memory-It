import { React, useState } from "react"
import styled from "styled-components"
import { changeImage, detailedPostMode } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import MapType from '../MapType' 
import dummydata from '../../dummy/dummydata'

const Posts = styled.article`
  text-align: center;  
`
const DetailedMood = styled.div`
  text-align: right;
  margin-right: 1vw;
`
const Picture = styled.img` 
  width: 19vw;
  margin: 2vw;
  &:hover {
    cursor: pointer;
  }
`
const PostsHover = styled.div`
  text-align: center;
`
const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

export default function CaseOfArticleTrue () {
  const [isHover, setIsHover ] = useState(false)


  const hideStyle = {display: 'none'} 
  const state = useSelector(state => state.loginReducer)
  const postState = useSelector(state => state.postReducer)
  const pictureState = useSelector(state => state.changeImageReducer)
  const { isLogin } = state
  const { isDiary } = postState
  const { picture } = pictureState

  const moods = () => {
    if (picture.mood.length === 5) {
      return (
        <Mood src={allMood} />
      )
    }
    let mood = []

    for (let i=0;i<picture.mood.length;i++) {
      if (picture.mood[i] === 1) {  
        mood.push(<Mood src={yellowMood} />)  
      }
      if (picture.mood[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (picture.mood[i] === 3) {
        mood.push(<Mood src={redMood} />)  
      }
      if (picture.mood[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (picture.mood[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }

  const dispatch = useDispatch()

  const caseOfArticleTrue = () => {
    if (isLogin) {
      if (isDiary) {
        return (
          <Posts>
            {dummydata.map(post => (
              <Picture key={post.id} src={post.src} onClick={() => {
                dispatch(changeImage(post))
                dispatch(detailedPostMode())}} />
            ))}
          </Posts>
        )
      } else {
        return (
          <MapType />
        )
      }
    }   
  }

  const Test = () => {
    if (isLogin) {
      if (isDiary) {
        if (!isHover) {
          return (
            <>
              <Posts onMouseEnter={() => setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>
                <Picture src={dummydata[0].src} onClick={() => {
                  dispatch(detailedPostMode())}} />
              </Posts>
              <PostsHover style={hideStyle}>
                <DetailedMood>{moods}</DetailedMood>
                <Picture src={dummydata[0].src} onClick={() => {
                  dispatch(detailedPostMode())}} />
              </PostsHover>
            </>
          )
        } else {
          return (
            <>
              <Posts>
                <Picture src={dummydata[0].src} onClick={() => {
                  dispatch(detailedPostMode())}} />
              </Posts>
              <PostsHover >
                <DetailedMood>{moods}</DetailedMood>
                <Picture src={dummydata[0].src} onClick={() => {
                  dispatch(detailedPostMode())}} />
              </PostsHover>
            </>
          )
        }
      } else {
        return (
          <MapType />
        )
      }     
    }
  }

  return (
    <>
      {caseOfArticleTrue()}
    </>

  )  
}
