import React from "react"
import styled from "styled-components"
const Button = styled.button`
  background-color: #EFEFEF;
  color : #EEEEEE;
  border-color: #EEEEEE;

  font-size: xx-large;
  
`
const YButton = styled(Button)`
  background-color: yellow;
  color : yellow;
  border-color: yellow;
`
const RButton = styled(Button)`
  background-color: red;
  color : red;
  border-color: red;
`
const BButton = styled(Button)`
  background-color: blue;
  color : blue;
  border-color: blue;
`
const GButton = styled(Button)`
  background-color: green;
  color : green;
  border-color: green;
`
const VButton = styled(Button)`
  background-color: violet;
  color : violet;
  border-color: violet;
  
  
`

function ColorSelection () {
  return (
    <>
      <Button>A</Button>
      <YButton>Y</YButton>
      <RButton>R</RButton>
      <BButton>B</BButton>
      <GButton>G</GButton>
      <VButton>V</VButton>        
    </>  

  )


}
export default ColorSelection