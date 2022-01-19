import React from 'react'
import { useSelector } from 'react-redux'
import CaseOfArticleTrue from './article/CaseOfArticleTrue'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import './article.css'
import LandingPage from '../pages/LandingPage'

function Article() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  return (
    <div>
      {isLogin ? <CaseOfArticleTrue />: <CaseOfArticleFalse />}
    </div>
  )
}

export default Article
