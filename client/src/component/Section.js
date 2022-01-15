import React, { forwardRef } from 'react'
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
    justify-content: flex-end;
  }
  display: flex;
  background: white;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`
const ArticleLayer = styled.div`
  /* height: calc(100% - 60px); */
  display: flex;
  justify-content: center;
  height: 100%;
`

function Section(prop, { rightBarRef }) {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  // console.log('REF!!!!!', rightBarRef.current)

  return (
    <SectionBox>
      <HeaderLayer>
        <Header />
      </HeaderLayer>
      <ArticleLayer>
        {isLogin ? <Outlet context={rightBarRef} /> : <CaseOfArticleFalse />}
      </ArticleLayer>
    </SectionBox>
  )
}

export default forwardRef(Section)
