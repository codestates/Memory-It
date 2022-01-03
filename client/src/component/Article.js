import React from 'react'
import styled from 'styled-components'
import postOne from '../dummy/dummy1.png'

const dummydata = [{
  id: 1, 
  src:'../dummy/dummy1.png'
}, {
  id: 2, 
  src:'../dummy/dummy2.png'
}, {
  id: 3, 
  src:'../dummy/dummy3.png'
}, {
  id: 4, 
  src:'../dummy/dummy4.png'
}]

const Posts = styled.article`
  border: 1px solid black;
`
const Post = styled.img`
  border: 1px dashed green;
  width: 20vw;
  margin: 5vw;
`

const Picture = styled.img`
  transform: translate(-50%, -50%);
  width: 30vh;
  border: 35px solid;
  border-radius: 20px;
  border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
  border-image-slice: 1;
  margin: 10px;
`

const ThumbnailWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
`

const ThumbnailCentered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
`

function Article () {
  return (
    <Posts>
      {dummydata.map(post => ( 
        <Post key={post.id} src={post.src}/>  
      ))}
    </Posts>
  )
}
export default Article