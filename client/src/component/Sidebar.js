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
import { useNavigate, Link } from 'react-router-dom'

export const Logo = styled.img`
  width: 140px;
  height: 110px;
  margin: 15px;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: flex-start;
`

const Menu = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  &:hover {
    background-color: pink;
    color: white;
  }
`

const HorizenLine = styled.hr`
  margin: 1rem 0;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`

const LoginBntWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`

// isLogin = false
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => (props.white ? 'white' : 'black')};
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    /* box-shadow:  */
  }
`

const AlreadyMember = styled.div`
  color: #0000ff;
  font-size: 1vh;
  text-align: left;
  margin-left: 1.5vw;
`

// isLogin = true
const LogoutButton = styled.div`
  background-color: tomato;
  border-radius: 20px;
  height: 2rem;
  width: 5rem;
  margin-top: 2rem;
  &:hover {
    border: 2px solid green;
  }
`

function Sidebar() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(changeToLoginFalse())
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

  const notUnderLine = { textDecoration: 'none' }

  return (
    <>
      <Logo src={logo} />
      <MenuWrapper>
        <Menu onClick={handleDiaryTrue}>다이어리로 보기</Menu>
        <Menu onClick={handleDiaryFalse}>지도로 보기</Menu>
        <Menu>color map</Menu>
        <HorizenLine />
        <Menu onClick={handleModifyProfile}>개인정보 수정</Menu>
        <Menu onClick={showContactUs}>Contact Us</Menu>
        <HorizenLine />
      </MenuWrapper>
      {isLogin ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginBntWrapper>
          <LoginButton bgColor="yellow">카카오 계정 로그인</LoginButton>
          <LoginButton bgColor="green" white>
            네이버 계정 로그인
          </LoginButton>
          <LoginButton bgColor="blue" white>
            페이스북 계정 로그인
          </LoginButton>
          <HorizenLine />
          <LoginButton bgColor="coral">
            <Link to="/signup" style={notUnderLine}>
              Memory it 회원가입
            </Link>
          </LoginButton>
          <AlreadyMember>
            <Link to="/login" style={notUnderLine}>
              이미 회원이신가요?
            </Link>
          </AlreadyMember>
        </LoginBntWrapper>
      )}
    </>
  )
}

export default Sidebar
