import { React, useState } from 'react'
import styled from 'styled-components'
import { changeImage, detailedPostMode } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import MapType from '../MapType'
import dummydata from '../../dummy/dummydata'

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
// isLogin = true
const Picture = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    width: 102%;
    height: 102%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 1109px) {
    width: 70%;
    min-width: 17rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 22rem;
  margin: 1.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`

const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

export default function CaseOfArticleTrue() {
  const [isHover, setIsHover] = useState(false)
  const hideStyle = { display: 'none' }
  const state = useSelector(state => state.loginReducer)
  const postState = useSelector(state => state.postReducer)
  const pictureState = useSelector(state => state.changeImageReducer)
  const { isLogin } = state
  const { isDiary } = postState
  const { picture } = pictureState

  const moods = () => {
    let mood = []

    for (let i = 0; i < picture.mood.length; i++) {
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
              <PictureWrapper
                key={post.id}
                onClick={() => {
                  dispatch(changeImage(post))
                  dispatch(detailedPostMode())
                }}
              >
                <Picture src={post.src} />
              </PictureWrapper>
            ))}
          </Posts>
        )
      } else {
        return <MapType />
      }
    }
  }


  return <>{caseOfArticleTrue()}</>
}
