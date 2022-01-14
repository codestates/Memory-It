import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import allMood from '../static/allMood.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeMonth, createPostMode, changeUserPost } from '../actions/index'
import { useNavigate } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useRef } from 'react'
import logo from '../static/logo.png'

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const colors = ['#F9FDE4', '#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

const DropDown = styled.div`
  @media only screen and (max-width: 500px) {
    width: 6rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  width: 8rem;
  height: 40px;

  color: rgb(52, 58, 64);
  text-align: center;
  border: 1px #ff9900 solid;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;

  * {
    user-select: none;
  }
`
const DropDownOptionWrapper = styled.div`
  position: absolute;
  top: 2.6rem;
  left: -1px;
  width: 8rem;
  height: 0px;
  overflow: scroll;
  border-radius: 10px;
  background-color: white;
  transition: height 0.2s;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
`
const DropDownOption = styled.div`
  color: #898989;
  padding: 10px 0;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: rgb(52, 58, 64);
    background-color: rgba(255, 153, 0);
  }
`

const ArrowWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 8px;
`

const DownArrowIcon = styled(MdOutlineKeyboardArrowDown)`
  width: 1.5rem;
  height: 1.5rem;
`
const UpArrowIcon = styled(DownArrowIcon)`
  transform: rotate(0.5turn);
`

const MoodWrapper = styled.div`
  margin: 0 5%;
  display: flex;
`
const Mood = styled.div`
  @media only screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
  }
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`
const AllMood = styled(Mood)`
  margin-left: 10vw;
`

export const AddPost = styled.div`
  @media only screen and (max-width: 1180px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 10px;
  border: 1.5px #ff9900 solid;
  transition: background-color linear 0.1s;

  * {
    text-decoration: none;
    color: rgb(52, 58, 64);
    transition: color linear 0.2s;
    user-select: none;
  }
  &:hover {
    background-color: #ff9900;
    cursor: pointer;
    * {
      color: white;
      transition: color linear 0.2s;
    }
    cursor: pointer;
  }
`

export const Pen = styled(FaPen)`
  @media only screen and (max-width: 500px) {
    margin-right: 0;
  }
  color: rgb(52, 58, 64);
  margin-right: 5px;
`

const Logo = styled.img`
  @media only screen and (max-width: 1180px) {
    position: absolute;
    display: block;
    left: 5%;
    width: 50px;
    height: 40px;
    /* margin-right: 20%; */
  }
  display: none;
`

function Header() {
  const [userPost, setUserPost] = useState([])
  const state = useSelector(state => state.loginReducer)
  const rightbarState = useSelector(state => state.rightbarReducer)
  const { month } = useSelector(state => state.changeUserPostReducer)

  const { isLogin } = state
  const { rightBar } = rightbarState
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dropdown = useRef(null)
  const downIcon = useRef(null)
  const upIcon = useRef(null)

  const handleCreatePost = () => {
    if (isLogin) {
      dispatch(createPostMode())
    } else {
      navigate('/login')
    }
  }

  const signup = () => {
    navigate('/signup')
  }

  const dropdownClick = () => {
    if (dropdown.current.style.height === '11.2rem') {
      dropdown.current.style = 'height: 0;'
      upIcon.current.style.display = 'none'
      downIcon.current.style.display = 'block'
    } else {
      dropdown.current.style = 'height: 11.2rem;'
      upIcon.current.style.display = 'block'
      downIcon.current.style.display = 'none'
    }
  }

  const monthSelect = (n, month) => {
    dispatch(changeUserPost(n, month))
  }

  return (
    <>
      <Logo src={logo}></Logo>
      {isLogin ? (
        <DropDown name="month" onClick={dropdownClick} className="header-el">
          <div style={{ paddingRight: '12px' }}>{month}</div>
          <ArrowWrapper ref={downIcon}>
            <DownArrowIcon />
          </ArrowWrapper>
          <ArrowWrapper ref={upIcon} style={{ display: 'none' }}>
            <UpArrowIcon />
          </ArrowWrapper>
          <DropDownOptionWrapper ref={dropdown}>
            {months.map((month, idx) => (
              <DropDownOption
                key={idx}
                value={month}
                onClick={() => monthSelect(idx + 1, month)}
              >
                {month}
              </DropDownOption>
            ))}
          </DropDownOptionWrapper>
        </DropDown>
      ) : (
        <AllMood src={allMood} />
      )}
      <MoodWrapper className="header-el">
        {colors.map((v, i) => (
          <Mood color={v} key={i}></Mood>
        ))}
      </MoodWrapper>
      {isLogin ? (
        <AddPost onClick={handleCreatePost} className="header-el">
          <Pen />
          <div>작성하기</div>
        </AddPost>
      ) : (
        <AddPost onClick={signup} className="header-el">
          <Pen />
          <div>시작하기</div>
        </AddPost>
      )}
    </>
  )
}

export default Header
