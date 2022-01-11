import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import CaseOfArticleTrue from './article/CaseOfArticleTrue'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'
import Article from './Article'
import styled from 'styled-components'
import { Logo } from './Sidebar'
import logo from '../static/logo.png'

const HeaderLogo = styled(Logo)`
  @media only screen and (max-width: 1350px) {
    width: 5rem;
    height: 3.5rem;
    margin: 1rem 0;
  }
  @media only screen and (min-width: 1351px) {
    display: none;
  }
`

const SectionBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const HeaderLayer = styled.div`
  display: flex;
  background-color: rgba(248, 249, 250, 0.1);
  padding: 0 1rem;
  justify-content: space-around;
  align-items: center;
  height: 11%;
  width: 100%;
`
const ArticleLayer = styled.div`
  height: 89%;
`

function Section() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state

  return (
    <SectionBox>
      <HeaderLayer>
        <HeaderLogo src={logo} />
        <Header />
      </HeaderLayer>
      <ArticleLayer>{isLogin ? <Outlet /> : <CaseOfArticleFalse />}</ArticleLayer>
    </SectionBox>
  )
}

export default Section
