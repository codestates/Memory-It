import React from 'react'
import Section from './Section'
import Sidebar from './Sidebar'
import RightBar from './RightBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0.4rem;
  margin: 0.4rem;
`
const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-right: 1px solid #c4c4c4;
  flex: 1 0 0;
`
const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-right: 1px solid #c4c4c4;
  flex: 6 0 0;
`
const RightBarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  flex: 3 0 0;
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