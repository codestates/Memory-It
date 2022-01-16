import React, { useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../static/logo.png'
import {
  changeToLoginFalse,
  modifyProfileMode,
  welcomeMode,
  contactUs,
} from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineSchedule, AiOutlineLogout } from 'react-icons/ai'
import { IoIosColorFilter } from 'react-icons/io'
import { FiMapPin } from 'react-icons/fi'
import { GrGithub } from 'react-icons/gr'
import { RiUser5Line } from 'react-icons/ri'
import axios from 'axios'

export const DiaryIcon = styled(AiOutlineSchedule)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 2.5px;
  color: rgb(52, 58, 64);
`
export const MapIcon = styled(FiMapPin)`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 0;
  top: 3px;
  color: rgb(52, 58, 64);
`
export const ColorMapIcon = styled(IoIosColorFilter)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 2.5px;
  color: rgb(52, 58, 64);
`
export const UserInfoIcon = styled(RiUser5Line)`
  position: absolute;
  width: 25px;
  height: 22px;
  left: 0;
  top: 4px;
  color: rgb(52, 58, 64);
`
export const GitHubIcon = styled(GrGithub)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0;
  top: 4px;
  color: rgb(52, 58, 64);
`
export const LogoutIcon = styled(AiOutlineLogout)`
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
  border-right: 6px solid;
  transition: 0.15s;
  &:hover {
    border-right: 6px solid #ff9900;
    color: rgb(52, 58, 64);
    cursor: pointer;
  }
`
const Nav = styled(NavLink)`
  color: #898989;
  position: relative;
  font-size: 1rem;
  line-height: 2.2rem;
  padding-left: 30px;
  text-decoration: none;
  border-right: 6px solid;
  transition: 0.15s;
  cursor: pointer;

  &:hover,
  &.active {
    border-right: 6px solid #ff9900;
    color: rgb(52, 58, 64);
  }
  &.active {
    background: rgba(255, 153, 0, 0.2);
    cursor: default;
    > .icon {
      color: #ff9900;
    }
  }
`

function Sidebar() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  const handleLogout = () => {
    axios
      .get('http://localhost:8081/users/logout', { withCredentials: true })
      .then(res => {
        console.log(res)
        dispatch(changeToLoginFalse())
        dispatch(welcomeMode())
      })
      .catch(err => {
        console.log(err)
      })
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
        <Nav to="/">
          <DiaryIcon className="icon" />
          다이어리로 보기
        </Nav>
        <Nav to="/map">
          <MapIcon className="icon" />
          지도로 보기
        </Nav>
        <Nav to="/color-map">
          <ColorMapIcon className="icon" />
          color map
        </Nav>
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
