import React from 'react'
import styled from 'styled-components'
import allMood from '../static/allMood.png'
import { useSelector, useDispatch } from 'react-redux'
import { createPostMode } from '../actions/index'
import { useNavigate } from 'react-router-dom'

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

const colors = ['yellow', 'green', 'red', 'blue', 'purple']

const DropDown = styled.select`
  @media only screen and (max-width: 860px) {
    height: 2.5rem;
    width: 6rem;
  }
  text-align: center;
  border: none;
  margin-right: 10px;
  height: 40px;
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
  &:hover {
    border: 3px solid pink;
    cursor: pointer;
  }
`
const AllMood = styled(Mood)`
  margin-left: 10vw;
`

export const AddPost = styled.div`
  width: 5rem;
  height: 2.5rem;
  background-color: orange;
  &:hover {
    border: 5px solid pink;
    cursor: pointer;
  }
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
      <AddPost onClick={handleCreatePost} />
    </>
  )
}

export default Header
