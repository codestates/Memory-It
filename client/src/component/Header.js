import React from 'react'
import styled from 'styled-components'
import ColorSelection from './HeaderComp/ColorSelection'
import ToggleButton from './HeaderComp/ToggleButton'
import PostButton from './HeaderComp/PostButton'
import trashCan from '../static/trashCan.png'


const DeleteButton = styled.img`

`

function Header() {
  return (
    <>
      <ColorSelection />
      <ToggleButton />
      <PostButton />
      <DeleteButton src={trashCan}/>
    </>
  )
}
  
export default Header