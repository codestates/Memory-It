import React from 'react'
import Header from './Header'
import Article from './Article'
import styled from 'styled-components'

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;   
`

const HeaderLayer = styled.div`
  border: 1px dashed black;
`
const ArticleLayer = styled.div`
  border: 1px dashed black;
`

function Section() {
  return (
    <SectionBox>
      <HeaderLayer><Header /></HeaderLayer>
      <ArticleLayer><Article /></ArticleLayer>
    </SectionBox>
  )
}
  
export default Section