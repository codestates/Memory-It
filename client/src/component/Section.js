import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'

const SectionBox = styled.div`
  position: relative;

  display: flex;
  height: 100%;
  flex-direction: column;
`

const HeaderLayer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  margin: 10px 0;
  width: 100%;
`
const ArticleLayer = styled.div`
  /* height: calc(100% - 60px); */
  height: 100%;
`

function Section() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state

  return (
    <SectionBox>
      <HeaderLayer>
        <Header />
      </HeaderLayer>
      <ArticleLayer>{isLogin ? <Outlet /> : <CaseOfArticleFalse />}</ArticleLayer>
    </SectionBox>
  )
}

export default Section
