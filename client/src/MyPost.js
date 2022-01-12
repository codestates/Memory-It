import React from 'react'
import Section from './component/Section'
import Sidebar from './component/Sidebar'
import RightBar from './component/RightBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-height: 40rem;
`
const SidebarBox = styled.div`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  width: 300px;
  border-right: 1px solid #c4c4c4;
  user-select: none;
`
const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
  width: 100%;
`

const RightBarBox = styled.div`
  @media only screen and (max-width: 670px) {
    display: none;
  }

  display: flex;
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
