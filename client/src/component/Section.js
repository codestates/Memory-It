import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'
import styled from 'styled-components'
import { Logo } from './Sidebar'
import logo from '../static/logo.png'

const HeaderLogo = styled(Logo)`
  @media only screen and (max-width: 1180px) {
    width: 5rem;
    height: 3.5rem;
    margin: 1rem 0;
  }
  display: none;
`

const SectionBox = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
`

const HeaderLayer = styled.div`
  @media only screen and (max-width: 1180px) {
    pointer-events: none;
    opacity: 0;
    /* top: -30px; */
  }
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  max-width: 700px;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  transition: ease-out 0.25s;
`
const ArticleLayer = styled.div`
  padding-top: 60px;
  height: 100%;
`

function Section() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state

  return (
    <SectionBox>
      <HeaderLayer>
        {/* <HeaderLogo src={logo} /> */}
        <Header />
      </HeaderLayer>
      <ArticleLayer>{isLogin ? <Outlet /> : <CaseOfArticleFalse />}</ArticleLayer>
    </SectionBox>
  )
}

export default Section
