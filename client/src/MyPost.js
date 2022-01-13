import React from 'react'
import Section from './component/Section'
import Sidebar from './component/Sidebar'
import RightBar from './component/RightBar'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  min-height: 40rem;
`
const SidebarBox = styled.div`
  @media only screen and (max-width: 1180px) {
    pointer-events: none;
    opacity: 0;
    left: -100px;
  }
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  width: 230px;
  height: 100%;
  border-right: 1px solid #c4c4c4;
  user-select: none;
  left: 0;
  transition: ease-out 0.25s;
`
const SectionBox = styled.div`
  @media only screen and (max-width: 1180px) {
    margin-left: 0;
  }

  display: flex;
  flex-direction: column;
  border-right: 1px solid #c4c4c4;
  width: 100%;
  margin-left: 230px;

  transition: ease-out 0.3s;
`

const RightBarBox = styled.div`
  @media only screen and (max-width: 900px) {
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
