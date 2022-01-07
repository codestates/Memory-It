import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'
import diaryType from '../static/diaryType.png'
import mapType from '../static/mapType.png'
import colormapType from '../static/colormapType.png'
import modifyProfile from '../static/modifyProfile.png'
import setting from '../static/setting.png'
import logout from '../static/logout.png'
import contactUs from '../static/contactUs.png'
import githubid from '../static/githubid.png'
import { changeToLoginFalse, changeToDiaryTrue, changeToDiaryFalse, modifyProfileMode, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const LogoSection = styled.div`
  text-align: center;
`
const Logo = styled.img`
  width: 160px;
  height: 150px;
  margin: 15px;

`
const WelcomeSection = styled.div`
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
`
const SelectDiary = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const DiaryImg = styled.img`
  height: 1.2vw;
`

const SelectMap = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const MapImg = styled.img`
  height: 1.2vw;
`

const SelectColormap = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const ColormapImg = styled.img`
  height: 1.2vw;
`

const HorizenLine = styled.hr`
  width: 170px;
  border: none;
  border: 1px solid #C4C4C4;
`


const ModifyProfile = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const ModifyProfileImg = styled.img`
  height: 1.2vw;
`

const Setting = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`
const SettingImg = styled.img`
  height: 1.2vw;
`

const IsLoginTrueSection = styled.div`
  text-align: center;
`
const IsLoginFalseSection = styled.div`
  text-align: center;
`

// isLogin = false
const LoginToKakao = styled.div`
  background-color: yellow;
  border-radius: 10px;
  padding: 1vh;
  margin: 1.5vh;
  &:hover {
    border: 5px solid pink;
    border-radius: 10px;
  }
`
const LoginToNaver = styled(LoginToKakao)`
  background-color: green;
  color: white;
`
const LoginToFacebook = styled(LoginToKakao)`
  background-color: blue;
  color: white;
`
const SignupToMemoryIt = styled(LoginToKakao)`
  background-color: #FFCC99;
  color: white;
  &:hover {
    border: 5px solid #B2FFBA;
    border-radius: 10px;
  }
`
const AlreadyMember = styled.div`
  color: #0000FF;
  font-size: 1vh;
  text-align: left;
  margin-left: 1.5vw;
`

// isLogin = true
const LogoutButton = styled.img`
  height: 2vw;
  &:hover {
    border: 2px solid green;
    border-radius: 20px;
  }
`

const ContactZone = styled.div`
  margin-left: 1.3vw;
  font-size: 1.2vw;
  margin-bottom: 5px;
`
const ContactusImg = styled.img`
  height: 1.2vw;
`

const ids = ['cjhmoves33', 'jres1007', 'hit-that-drum', 'rkems0122']

const Members = styled.div`
  margin-left: 1.3vw;
  font-size: 1.1vw;
  margin-bottom: 5px;
`
const MembersImg = styled.img`
  height: 1.2vw;
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

  const notUnderLine = {textDecoration: 'none'}

  return (
    
    <>
      <LogoSection>
        <Logo src={logo} />
      </LogoSection>
      <p />
      <WelcomeSection>김코딩님 반가워요!</WelcomeSection>
      <p />
      <SelectDiary onClick={handleDiaryTrue}><DiaryImg src={diaryType} /> 다이어리 형</SelectDiary>
      <SelectMap onClick={handleDiaryFalse}><MapImg src={mapType} /> 지도 형</SelectMap>
      <SelectColormap><ColormapImg src={colormapType} /> Color Map</SelectColormap>
      <HorizenLine />
      <ModifyProfile onClick={handleModifyProfile}><ModifyProfileImg src={modifyProfile} /> 개인정보 수정</ModifyProfile>
      <Setting><SettingImg src={setting} />설정</Setting>
      <HorizenLine />
      {isLogin ? <IsLoginTrueSection>
        <LogoutButton src={logout} onClick={handleLogout}/>
      </IsLoginTrueSection> : 
        <IsLoginFalseSection>
          <LoginToKakao>카카오 계정 로그인</LoginToKakao>
          <LoginToNaver>네이버 계정 로그인</LoginToNaver>
          <LoginToFacebook>페이스북 계정 로그인</LoginToFacebook>
          <HorizenLine />
          <Link to='/signup' style={notUnderLine}><SignupToMemoryIt>Memory it 회원가입</SignupToMemoryIt></Link>
          <Link to='/login' style={notUnderLine}><AlreadyMember>이미 회원이신가요?</AlreadyMember></Link>
        </IsLoginFalseSection>
      }
      <br /><br /><br />
      <ContactZone><ContactusImg src={contactUs}/> Contact us!</ContactZone>
      {ids.map((id, idx) => (
        <Members key={idx}><MembersImg src={githubid} /> <a href={`https://github.com/${id}`}>{id}</a></Members> 
      ))}
    </>
  )
}

export default Sidebar