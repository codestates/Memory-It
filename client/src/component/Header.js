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

const DropDown = styled.select`
  margin-left: 6.3vh;
  margin-right: 6.3vh;
  margin-top: 2vh;
  margin-bottom: 3vh;
  height: 45px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;

`
const MiniCalander = styled.img``
const months = ['Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const AllMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`
const YellowMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`
const GreenMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`
const RedMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`
const BlueMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`
const VioletMood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 19vh;
`

const AddPost = styled.img``  



function Header() {
  return (
    <>
      <DropDown name="month">
        <option value="January" selected>January</option>
        {months.map((month,idx) => (
          <option key={idx} value={month}>{month}</option>
        ))}
      </DropDown>
      <AllMood src={allMood} />
      <YellowMood src={yellowMood} />
      <GreenMood src={greenMood} />
      <RedMood src={redMood} />
      <BlueMood src={blueMood} />
      <VioletMood src={violetMood} />
      <AddPost src={addPost} />
    </>
  )
}
  
export default Header