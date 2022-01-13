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
  @media only screen and (max-width: 1180px) {
    justify-content: end;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 0 1rem; */
  /* padding-left: 10%;
  padding-right: 2%; */
  margin: 10px 0;
  width: 100%;
  /* transform: translateX(1.5%); */
  /* .header-el {
    transform: translateX(20%);
  } */
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
