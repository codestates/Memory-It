import React, { forwardRef, useRef } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  changeToLoginFalse,
  modifyProfileMode,
  welcomeMode,
  contactUs,
  createPostMode,
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
  transform: rotate(-0.25turn);
  &.loginBtn {
    transform: rotate(0turn);
    color: #898989;
  }
  transition: 0.5s;
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
  const logoutRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const rightOff = () => {
    rightBarRef.current.classList.add('hide')
    rightBarRef.current.classList.remove('selected')
  }
  const rightOn = () => {
    rightBarRef.current.classList.add('selected')
    rightBarRef.current.classList.remove('hide')
  }

  const handleCreatePost = () => {
    if (isLogin) {
      rightOn()
      dispatch(createPostMode())
    } else {
      navigate('/login')
    }
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
    if (isLogin) {
      dispatch(changeToLoginFalse())
    } else {
      navigate('/login')
    }
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
      <PenWrap onClick={handleCreatePost}>
        <PenM />
      </PenWrap>

      <UserInfoIconM className="icon-m" onClick={handleModifyProfile} />
      <GitHubIconM className="icon-m" onClick={showContactUs} />
      {isLogin ? (
        <Link to="/">
          <LogoutIconM className="icon-m logoutBtn" onClick={handleLogout} />
        </Link>
      ) : (
        <Link to="/login">
          <LogoutIconM className="icon-m loginBtn" onClick={handleLogout} />
        </Link>
      )}
    </>
  )
}

export default forwardRef(MobileNavigator)
