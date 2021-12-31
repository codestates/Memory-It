import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'


const Logo = styled.img`
  width: 160px;
  height: 150px;
  margin: 15px;
  border: 10px solid red;
`

const StyledButton_type_first = styled.button`
  position: relative;
  width: 180px;
  height: 60px;
  margin: 20px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  transition: var(--speed-normal);
  border: 1px solid var(--color-red);
  &:hover {
    border: 3px solid lightblue;
  }
`

const StyledButton_type_second = styled.button`
  position: relative;
  width: 100px;
  height: 60px;
  margin: 20px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  transition: var(--speed-normal);
  border: 1px solid var(--color-red);
  &:hover {
    border: 3px solid pink;
  }
`

function Sidebar () {
  return (
    <>
      <div>
        <Logo src={logo} />
      </div>

      <StyledButton_type_first>MY POST</StyledButton_type_first>
      <StyledButton_type_first>MY PROFILE</StyledButton_type_first>
      <StyledButton_type_first>CALENDER</StyledButton_type_first>

      <StyledButton_type_second>LOGOUT</StyledButton_type_second>
    </>
  )
}

export default Sidebar