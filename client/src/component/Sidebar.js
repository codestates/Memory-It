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
import { AiOutlineSchedule, AiOutlineLogout } from 'react-icons/ai'
import { GrGithub } from 'react-icons/gr'
import { IoIosColorFilter } from 'react-icons/io'
import { GrUserSettings } from 'react-icons/gr'
import { FiMapPin } from 'react-icons/fi'
import { RiUser5Line } from 'react-icons/ri'

const DiaryIcon = styled(AiOutlineSchedule)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 2.5px;
  color: rgb(52, 58, 64);
`
const MapIcon = styled(FiMapPin)`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 0;
  top: 3px;
  color: rgb(52, 58, 64);
`
const ColorMapIcon = styled(IoIosColorFilter)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 2.5px;
  color: rgb(52, 58, 64);
`
const UserInfoIcon = styled(RiUser5Line)`
  position: absolute;
  width: 25px;
  height: 22px;
  left: 0;
  top: 4px;
  color: rgb(52, 58, 64);
`
const GitHubIcon = styled(GrGithub)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 4px;
  color: rgb(52, 58, 64);
`
const LogoutIcon = styled(AiOutlineLogout)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 4px;
  color: rgb(52, 58, 64);
`

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
  color: #898989;
  position: relative;
  font-size: 1rem;
  line-height: 2.2rem;
  padding-left: 30px;
  &:hover {
    background-color: rgba(255, 153, 0, 0.6);
    border-right: 6px solid #ff9900;
    color: rgb(52, 58, 64);
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
        <Menu onClick={handleDiaryTrue}>
          <DiaryIcon />
          다이어리로 보기
        </Menu>
        <Menu onClick={handleDiaryFalse}>
          <MapIcon />
          지도로 보기
        </Menu>
        <Menu>
          <ColorMapIcon />
          color map
        </Menu>
      </MenuWrapper>
      <MenuWrapper>
        <Menu onClick={handleModifyProfile}>
          <UserInfoIcon />
          개인정보 수정
        </Menu>
        <Menu onClick={showContactUs}>
          <GitHubIcon />
          Contact Us
        </Menu>
        {isLogin ? (
          <Menu onClick={handleLogout}>
            <LogoutIcon />
            로그아웃
          </Menu>
        ) : null}
      </MenuWrapper>
    </>
  )
}

export default Sidebar
