import React, { useRef } from 'react'
import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../static/logo.png'
import {
  changeToLoginFalse,
  changeToDiaryFalse,
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
  left: 6px;
  top: 7px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`
export const MapIcon = styled(FiMapPin)`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 6px;
  top: 7px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`
export const ColorMapIcon = styled(IoIosColorFilter)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 6px;
  top: 7px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`
export const UserInfoIcon = styled(RiUser5Line)`
  position: absolute;
  width: 25px;
  height: 22px;
  left: 6px;
  top: 4px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`
export const GitHubIcon = styled(GrGithub)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 6px;
  top: 4px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`
export const LogoutIcon = styled(AiOutlineLogout)`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 6px;
  top: 4px;
  /* color: rgb(52, 58, 64); */
  color: #898989;
`

export const Logo = styled.img`
  width: 80px;
  height: 60px;
  margin-bottom: 2rem;
  margin-top: 1rem;
`

const MenuWrapper = styled.div`
  display: flex;
  background-color: rgb(248, 249, 250);
  flex-direction: column;
  text-align: flex-start;
  width: 95%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 10px;
`

const Menu = styled.div`
  color: #898989;
  position: relative;
  font-size: 1rem;
  line-height: 2.2rem;
  padding-left: 42px;
  margin-bottom: 0.2rem;

  /* transition: 0.15s; */
  &:hover {
    border-right: 6px solid #ff9900;
    color: rgb(52, 58, 64);
    cursor: pointer;
  }
`
const Nav = styled(NavLink)`
  color: #898989;
  position: relative;
  font-size: 1.1rem;
  line-height: 2.5rem;
  padding-left: 42px;
  margin-bottom: 0.5rem;
  text-decoration: none;

  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    .icon {
      color: #ff9900;
    }
  }
  &.active {
    color: #ff9900;
    box-shadow: 0 2px 5px rgba(255, 153, 0, 0.5);
    transform: translate(5px, -5px);
  }
  &.active {
    background: white;
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
  const navigate = useNavigate()

  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_SERVE}/users/logout`, { withCredentials: true })
      .then(res => {
        dispatch(welcomeMode())
        dispatch(changeToLoginFalse())
        dispatch(changeToDiaryFalse())

        navigate('/')
      })
      .catch(err => {
        console.log('server error')
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
          ??????????????? ??????
        </Nav>
        <Nav to="/map">
          <MapIcon className="icon" />
          ????????? ??????
        </Nav>
        <Nav to="/color-map">
          <ColorMapIcon className="icon" />
          color map
        </Nav>
      </MenuWrapper>
      <MenuWrapper>
        <Menu onClick={handleModifyProfile}>
          <UserInfoIcon />
          ???????????? ??????
        </Menu>
        <Menu onClick={showContactUs}>
          <GitHubIcon />
          Contact Us
        </Menu>
        {isLogin ? (
          <Menu onClick={handleLogout}>
            <LogoutIcon />
            ????????????
          </Menu>
        ) : null}
      </MenuWrapper>
    </>
  )
}

export default Sidebar
