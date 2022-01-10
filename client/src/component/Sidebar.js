import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'
import {
  changeToLoginFalse,
  changeToDiaryTrue,
  changeToDiaryFalse,
  modifyProfileMode,
  welcomeMode,
  contactUs,
} from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

export const Logo = styled.img`
  width: 140px;
  height: 110px;
  margin: 15px;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  width: 100%;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid gray;
`

const Menu = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  &:hover {
    background-color: pink;
    color: white;
    cursor: pointer;
  }
`

function Sidebar() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(changeToLoginFalse())
    dispatch(welcomeMode())
  }

  const handleDiaryTrue = () => {
    dispatch(changeToDiaryTrue())
    dispatch(welcomeMode())
  }

  const handleDiaryFalse = () => {
    dispatch(changeToDiaryFalse())
    dispatch(welcomeMode())
  }

  const handleModifyProfile = () => {
    dispatch(modifyProfileMode())
  }

  const showContactUs = () => {
    dispatch(contactUs())
  }

  return (
    <>
      <Logo src={logo} />
      <MenuWrapper>
        <Menu onClick={handleDiaryTrue}>다이어리로 보기</Menu>
        <Menu onClick={handleDiaryFalse}>지도로 보기</Menu>
        <Menu>color map</Menu>
      </MenuWrapper>
      <MenuWrapper>
        <Menu onClick={handleModifyProfile}>개인정보 수정</Menu>
        <Menu onClick={showContactUs}>Contact Us</Menu>
        {isLogin ? <Menu onClick={handleLogout}>로그아웃</Menu> : null}
      </MenuWrapper>
    </>
  )
}

export default Sidebar
