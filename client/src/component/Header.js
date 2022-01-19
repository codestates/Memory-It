import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import allMood from '../static/allMood.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear, createPostMode, changeUserPost, welcomeMode } from '../actions/index'
import { useNavigate } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
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

// const years = [2022, 2021]

export const colors = ['#d6d6d6', '#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

const DropDown = styled.div`
  @media only screen and (max-width: 500px) {
    width: 6rem;
    font-size: 0.75rem;
  }
  transition: width 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: #ff9900;
  width: 8rem;
  height: 40px;

  color: rgb(52, 58, 64);
  text-align: center;

  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;

  color: white;
  user-select: none;

  .selected-month {
    background-color: #ff9900;
    color: white;
    cursor: default;
  }
`

const DropDownOptionWrapper = styled.div`
  @media only screen and (max-width: 500px) {
    width: 6rem;
  }
  position: absolute;
  z-index: 40;
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
  @media only screen and (max-width: 500px) {
    padding: 6.6px 0;
  }
  color: #898989;
  padding: 10px 0;
  width: 100%;

  &:hover {
    color: rgb(52, 58, 64);
    background-color: rgba(255, 153, 0);
    color: white;
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
  .mood-active {
    transform: translate(0, -3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`
const Mood = styled.div`
  @media only screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
  }
  transition: width 0.4s, height 0.4s, transform ease-in 0.1s;
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
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
  }
  display: none;
`

function Header({ filteredColor, filtering }) {
  const state = useSelector(state => state.loginReducer)
  const { month, monthCode } = useSelector(state => state.changeUserPostReducer)
  const { isLogin } = state

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const moodWrapperRef = useRef(null)
  const dropdown = useRef(null)
  const downIcon = useRef(null)
  const upIcon = useRef(null)

  useEffect(() => {
    dropdown.current.children[monthCode].classList.add('selected-month')
  }, [])

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
    for (let i = 0; i < dropdown.current.children.length; i++) {
      const classList = dropdown.current.children[i].classList
      if (Object.values(classList).includes('selected-month'))
        classList.remove('selected-month')
    }
    dropdown.current.children[n - 1].classList.add('selected-month')

    dispatch(welcomeMode())

    if (isLogin) dispatch(changeUserPost(n, month, n - 1))
    else return
  }

  const moodSelect = i => {
    const target = moodWrapperRef.current.children[i]

    if (i <= 0) {
      const allmood = Object.values(moodWrapperRef.current.children)
      allmood.forEach(child => {
        child.classList.remove('mood-active')
      })

      filtering([])
    } else {
      if (filteredColor.includes(i)) {
        target.classList.remove('mood-active')

        const idx = filteredColor.indexOf(i)
        const colors = [...filteredColor]
        colors.splice(idx, 1)
        filtering(colors)
      } else {
        target.classList.add('mood-active')

        filtering([...filteredColor, i])
      }
    }
  }

  return (
    <>
      <Logo src={logo}></Logo>
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

      <MoodWrapper className="header-el" ref={moodWrapperRef}>
        {colors.map((v, i) => (
          <Mood color={v} key={i} onClick={() => moodSelect(i)}></Mood>
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
