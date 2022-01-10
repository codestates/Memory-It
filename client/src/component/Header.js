import React from 'react'
import styled from 'styled-components'
import allMood from '../static/allMood.png'
import { useSelector, useDispatch } from 'react-redux'
import { createPostMode } from '../actions/index'
import { useNavigate } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

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

const colors = ['#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

const DropDown = styled.select`
  @media only screen and (max-width: 860px) {
    height: 2.5rem;
    width: 6rem;
  }
  background-color: white;
  width: 8rem;
  height: 40px;

  color: rgb(52, 58, 64);
  text-align: center;
  border: 1.5px #ff9900 solid;
  border-radius: 10px;
  outline: none;

  margin-right: 10px;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;
`
const MoodWrapper = styled.div`
  @media only screen and (max-width: 1350px) {
    display: none;
  }
  display: flex;
`
const Mood = styled.div`
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
    border: 3px solid pink;
    cursor: pointer;
  }
`
const AllMood = styled(Mood)`
  margin-left: 10vw;
`

export const AddPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 10px;
  border: 1.5px #ff9900 solid;
  transition: background-color linear 0.1s;

  & * {
    text-decoration: none;
    color: rgb(52, 58, 64);
    transition: color linear 0.2s;
  }
  &:hover {
    background-color: #ff9900;
    cursor: pointer;
    * {
      color: white;
      transition: color linear 0.2s;
    }
    border: 5px solid pink;
    cursor: pointer;
  }
`

const Pen = styled(FaPen)`
  color: rgb(52, 58, 64);
  margin-right: 5px;
`

function Header() {
  const state = useSelector(state => state.loginReducer)
  const rightbarState = useSelector(state => state.rightbarReducer)
  const { isLogin } = state
  const { rightBar } = rightbarState
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  return (
    <>
      {isLogin ? (
        <DropDown name="month">
          {months.map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </DropDown>
      ) : (
        <AllMood src={allMood} />
      )}
      <MoodWrapper>
        {colors.map((v, i) => (
          <Mood color={v} key={i}></Mood>
        ))}
      </MoodWrapper>
      {isLogin ? (
        <AddPost onClick={handleCreatePost}>
          <Pen />
          <div>작성하기</div>
        </AddPost>
      ) : (
        <AddPost onClick={signup}>
          <Pen />
          <div>시작하기</div>
        </AddPost>
      )}
    </>
  )
}

export default Header
