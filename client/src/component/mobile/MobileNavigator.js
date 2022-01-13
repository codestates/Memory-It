import React, { forwardRef } from 'react'
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
import { Pen } from '../Header'

const DiaryIconM = styled(DiaryIcon)`
  position: static;
`
const MapIconM = styled(MapIcon)`
  position: static;
`
const ColorMapIconM = styled(ColorMapIcon)`
  position: static;
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

const PenWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 30%;
  background-color: #ff9900;
  margin-bottom: 10px;
  border: 1px solid #ff9900;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    margin-bottom: 1.5rem;
  }
`

const PenM = styled(Pen)`
  color: white;
  transform: translateX(10%);
  width: 50%;
  height: 50%;
`

const NavM = styled(NavLink)`
  color: rgb(52, 58, 64);
  text-decoration: none;
  height: 100%;
  &.active {
    border-top: 5px solid #ff9900;
    .icon-m {
      color: #ff9900;
    }
  }
`

const MobileNavigator = (props, { rightBarRef }) => {
  const { isLogin } = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()

  const rightOff = () => {
    rightBarRef.current.classList.add('hide')
    rightBarRef.current.classList.remove('selected')
  }
  const rightOn = () => {
    rightBarRef.current.classList.add('selected')
    rightBarRef.current.classList.remove('hide')
  }

  const handleModifyProfile = () => {
    rightOn()
    dispatch(modifyProfileMode())
  }

  const showContactUs = () => {
    rightOn()
    dispatch(contactUs())
  }

  const handleLogout = () => {
    dispatch(changeToLoginFalse())
    dispatch(welcomeMode())
  }

  return (
    <>
      <NavM to="/" onClick={rightOff}>
        <DiaryIconM className="icon-m" />
      </NavM>
      <NavM to="/map" onClick={rightOff}>
        <MapIconM className="icon-m" />
      </NavM>
      <NavM to="/color-map" onClick={rightOff}>
        <ColorMapIconM className="icon-m" />
      </NavM>
      <PenWrap>
        <PenM />
      </PenWrap>

      <UserInfoIconM className="icon-m" onClick={handleModifyProfile} />
      <GitHubIconM className="icon-m" onClick={showContactUs} />
      <LogoutIconM className="icon-m" onClick={handleLogout} />
    </>
  )
}

export default forwardRef(MobileNavigator)
