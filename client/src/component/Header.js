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

const colors = ['yellow', 'green', 'red', 'blue', 'purple']

const DropDown = styled.select`
  @media only screen and (max-width: 860px) {
    height: 2.5rem;
    width: 6rem;
    font-size: 10px;
  }
  text-align: center;
  border: none;
  margin-right: 10px;
  height: 40px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
`
const MoodWrapper = styled.div`
  @media only screen and (max-width: 860px) {
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
  }
`
const AllMood = styled(Mood)`
  margin-left: 10vw;
`

export const AddPost = styled.div`
  @media only screen and (max-width: 860px) {
    width: 5rem;
    height: 2.5rem;
  }
  background-color: orange;
  width: 80px;
  height: 35px;
  &:hover {
    border: 5px solid pink;
  }
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
        {colors.map((v, i) => (
          <Mood color={v} key={i}></Mood>
        ))}
      </MoodWrapper>
      <AddPost onClick={handleCreatePost} />
    </>
  )
}

export default Header
