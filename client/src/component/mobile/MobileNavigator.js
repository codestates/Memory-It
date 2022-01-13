import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  changeToLoginFalse,
  modifyProfileMode,
  welcomeMode,
  contactUs,
} from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import {
  ColorMapIcon,
  DiaryIcon,
  GitHubIcon,
  LogoutIcon,
  MapIcon,
  UserInfoIcon,
} from '../Sidebar'

const Logo = styled.h2`
  /* position: absolute;
  left: 1rem; */
`

const DiaryIconM = styled(DiaryIcon)`
  position: static;
`
const MapIconM = styled(MapIcon)`
  position: static;
`
const ColorMapIconM = styled(ColorMapIcon)`
  position: static;
  /* width: 30px;
  height: 30px; */
`
const UserInfoIconM = styled(UserInfoIcon)`
  position: static;
`
const GitHubIconM = styled(GitHubIcon)`
  position: static;
`
const LogoutIconM = styled(LogoutIcon)`
  position: static;
`
const NavM = styled(NavLink)`
  color: rgb(52, 58, 64);
  text-decoration: none;
  height: 100%;
  &.active {
    border-top: 5px solid #ff9900;
    .icon-m {
      cursor: default;
      color: #ff9900;
    }
  }
`

const MobileNavigator = () => {
  const { isLogin } = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()

  const handleModifyProfile = () => {
    dispatch(modifyProfileMode())
  }

  const showContactUs = () => {
    dispatch(contactUs())
  }

  const handleLogout = () => {
    dispatch(changeToLoginFalse())
    dispatch(welcomeMode())
  }

  return (
    <>
      <NavM to="/">
        <DiaryIconM className="icon-m" />
      </NavM>
      <NavM to="/map">
        <MapIconM className="icon-m" />
      </NavM>
      <NavM to="/color-map">
        <ColorMapIconM className="icon-m" />
      </NavM>
      <p>Memory It</p>
      <UserInfoIconM className="icon-m" onClick={handleModifyProfile} />
      <GitHubIconM className="icon-m" onClick={showContactUs} />
      <LogoutIconM className="icon-m" onClick={handleLogout} />
    </>
  )
}

export default MobileNavigator