import React from 'react'
import { useSelector } from 'react-redux'
import CaseOfArticleTrue from './article/CaseOfArticleTrue'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Test from './article/Test'
import './article.css'

function Article() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  return (
    <>
      {isLogin ? <CaseOfArticleTrue />: <CaseOfArticleFalse />}
    </>
  )
}

export default Article
