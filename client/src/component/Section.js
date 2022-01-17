import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'

const SectionBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  /* overflow: scroll; */
`

const HeaderLayer = styled.div`
  @media only screen and (max-width: 1180px) {
    justify-content: flex-end;
  }
  display: flex;
  background: white;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  /* border-bottom: 1px solid lightgray; */
`

const ArticleLayer = styled.div`
  display: flex;
  justify-content: center;

  /* min-height: 100%; */
  overflow: scroll;
  height: 100%;
  /* min-height: 40rem; */
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
