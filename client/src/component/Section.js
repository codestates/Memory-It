import React from 'react'
import Header from './Header'
import Article from './Article'
import styled from 'styled-components'



const HeaderLayer = styled.div`
  border: 1px dashed skyblue;
  flex: 3 0 0;
`
const ArticleLayer = styled.div`
  border: 1px dashed skyblue;
  flex: 7 0 0;
`

function Section() {
  return (
    <>
      <HeaderLayer><Header /></HeaderLayer>
      <ArticleLayer><Article /></ArticleLayer>
    </>
  )
}
  
export default Section