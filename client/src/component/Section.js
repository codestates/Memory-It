import React from 'react'
import Header from './Header'
import Article from './Article'
import styled from 'styled-components'

const SectionBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const HeaderLayer = styled.div`
  @media only screen and (max-width: 860px) {
    width: 40%;
    overflow: scroll;
  }

  display: flex;
  /* background-color: rgba(248, 249, 250, 0.1); */
  background-color: gray;
  padding: 0 1rem;
  align-items: center;
  align-self: center;
  height: 8%;
  width: 450px;
`
const ArticleLayer = styled.div`
  height: 92%;
`

function Section() {
  return (
    <SectionBox>
      <HeaderLayer>
        <Header />
      </HeaderLayer>
      <ArticleLayer>
        <Article />
      </ArticleLayer>
    </SectionBox>
  )
}

export default Section
