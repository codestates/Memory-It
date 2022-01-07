import React from "react"
import styled from "styled-components"
import { changeImage, detailedPostMode } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import MapType from '../MapType' 
import dummydata from '../../dummy/dummydata'

const Posts = styled.article`
  text-align: center;  
`

const Picture = styled.img` 
  width: 19vw;
  margin: 2vw;
`



function CaseOfArticleTrue () {

  const state = useSelector(state => state.loginReducer)
  const postState = useSelector(state => state.postReducer)
  const { isLogin } = state
  const { isDiary } = postState
  const dispatch = useDispatch()
  console.log('login상태', isLogin)
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
  return (
    <>
      {caseOfArticleTrue()}
    </>

  )  

}

export default CaseOfArticleTrue