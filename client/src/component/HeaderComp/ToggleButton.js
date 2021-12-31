import React from "react"
import styled from "styled-components"
import post from '../../static/post.png'
import mapButton from '../../static/map.png'

const Post = styled.img`
  width: 160px;
  height: 150px;
  border: 1px solid black;
`
const MapButton = styled.img`
  width: 160px;
  height: 150px;
  border: 1px solid black;
`


function ToggleButton () {
  return (
    <span>
      <Post src={post}></Post>
      <MapButton src={mapButton}></MapButton>
    </span>  

  )


}
export default ToggleButton