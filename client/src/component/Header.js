import React from 'react'
import styled from 'styled-components'
import allMood from '../static/allMood.png'
import { useSelector, useDispatch } from 'react-redux'
import { createPostMode } from '../actions/index'

const months = [
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

const DropDown = styled.select`
  border: none;
  margin-right: 5px;
  height: 40px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  flex-grow: 1;
`
const MoodWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 4;
`
const Mood = styled.div`
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  &:hover {
    border: 3px solid pink;
  }
`
const AllMood = styled(Mood)`
  margin-left: 10vw;
`

export const AddPost = styled.div`
  background-color: orange;
  width: 80px;
  height: 35px;
  &:hover {
    border: 5px solid pink;
  }
  flex-grow: 1;
`

function Header() {
  const state = useSelector(state => state.loginReducer)
  const rightbarState = useSelector(state => state.rightbarReducer)
  const { isLogin } = state
  const { rightBar } = rightbarState
  const dispatch = useDispatch()

  const handleCreatePost = () => {
    dispatch(createPostMode())
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
        <Mood color={'yellow'} />
        <Mood color={'green'} />
        <Mood color={'red'} />
        <Mood color={'blue'} />
        <Mood color={'violet'} />
      </MoodWrapper>
      <AddPost onClick={handleCreatePost} />
    </>
  )
}

export default Header
