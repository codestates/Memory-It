import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import CaseOfArticleFalse from './article/CaseOfArticleFalse'
import Header from './Header'
import MobileNavigator from './mobile/MobileNavigator'

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
  height: 60px;
  width: 100%;
`
const ArticleLayer = styled.div`
  height: calc(100% - 60px);
`
const MobileNavigatorWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    /* position: absolute; */
    position: fixed;
    z-index: 20;
    display: flex;
    bottom: 0;

    align-items: center;
    justify-content: space-around;
    height: 60px;
    min-width: 25rem;
    max-width: 40rem;
    width: 80%;
    background-color: white;
    padding: 0 1rem;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }
  user-select: none;
  display: none;
  .icon-m {
    color: #898989;
    width: 1.8rem;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: #ff9900;
    }
  }
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
      {/* <MobileNavigatorWrapper>
        <MobileNavigator />
      </MobileNavigatorWrapper> */}
    </SectionBox>
  )
}

export default Section
