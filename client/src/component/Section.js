import React from 'react'
import Header from './Header'
import Article from './Article'
import styled from 'styled-components'

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  
  flex: 5.5 0 0;   
`

const HeaderLayer = styled.div`

  flex: 1 0 0;
`
const ArticleLayer = styled.div`

  flex: 1 0 0;
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