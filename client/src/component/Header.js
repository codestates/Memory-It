import React from 'react'
import styled from 'styled-components'
import addPost from '../static/addPost.png'
import miniCalander from '../static/miniCalander.png'
import allMood from '../static/allMood.png'
import yellowMood from '../static/yellowMood.png'
import greenMood from '../static/greenMood.png'
import redMood from '../static/redMood.png'
import blueMood from '../static/blueMood.png'
import violetMood from '../static/violetMood.png'
import { changeToLoginTrue, changeToLoginFalse } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

const DropDown = styled.select`
  margin-left: 1vw;
  margin-right: 2.5vw;
  margin-top: 0.5vw;
  margin-bottom: 3vh;
  height: 45px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;

`
const MiniCalander = styled.img``
const months = ['Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const Mood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
  &:hover {
    border: 5px solid pink;
  }
`


const AddPost = styled.img`
  float: right;
  margin-top: 0.5vw;
  margin-right: 2.5vw;
  &:hover {
    border: 5px solid pink;
  }
`  



function Header() {
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  return (
    <>
      {isLogin ? <DropDown name="month">
        <option value="January" defaultValue>January</option>
        {months.map((month,idx) => (
          <option key={idx} value={month}>{month}</option>
        ))}
      </DropDown> : null}

      <Mood src={allMood} />
      <Mood src={yellowMood} />
      <Mood src={greenMood} />
      <Mood src={redMood} />
      <Mood src={blueMood} />
      <Mood src={violetMood} />

      <AddPost src={addPost} />
    </>
  )
}
  
export default Header