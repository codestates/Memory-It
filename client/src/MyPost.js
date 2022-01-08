import React from 'react'
import Section from './component/Section'
import Sidebar from './component/Sidebar'
import RightBar from './component/RightBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
`
const SidebarBox = styled.div`
  @media only screen and (max-width: 1350px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 200px;
  border-right: 1px solid #c4c4c4;
`
const SectionBox = styled.div`
  @media only screen and (max-width: 1410px) {
    width: 100%;
  }
  @media only screen and (max-width: 860px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
  width: 100%;
`
const RightBarBox = styled.div`
  @media only screen and (max-width: 1410px) {
    width: 800px;
  }
  @media only screen and (max-width: 860px) {
    display: none;
  }

  display: flex;
  padding: 0.4rem;
  width: 800px;
`

function MyPost() {
  return (
    <Container>
      <SidebarBox>
        <Sidebar />
      </SidebarBox>
      <SectionBox>
        <Section />
      </SectionBox>
      <RightBarBox>
        <RightBar />
      </RightBarBox>
    </Container>
  )
}

export default MyPost
