import React, { forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'
import LandingPage from '../pages/LandingPage'

const SectionBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
`

const HeaderLayer = styled.div`
  @media only screen and (max-width: 1180px) {
    justify-content: flex-end;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
`

const ArticleLayer = styled.div`
  display: flex;
  justify-content: center;

  overflow: scroll;
  height: 100%;
`

function Section(props, { rightBarRef }) {
  const [filteredColor, setFilteredColor] = useState([])
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state

  return (
    <SectionBox>
      <HeaderLayer>
        <Header filteredColor={filteredColor} filtering={setFilteredColor} />
      </HeaderLayer>
      <ArticleLayer>
        {isLogin ? (
          <Outlet context={{ rightBarRef, rer: props.rer, filteredColor }} />
        ) : (
          <LandingPage />
        )}
      </ArticleLayer>
    </SectionBox>
  )
}

export default forwardRef(Section)
