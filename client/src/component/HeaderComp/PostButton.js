import React from "react"
import styled from "styled-components"
const PButton = styled.button`
  background-color: red;
  color : red;
  border-color: red;
  width: 3%;
  font-size: xx-large;
  
`

function PostButton () {
  return (
    <>
      <PButton>+</PButton>
    </>  

  )


}
export default PostButton