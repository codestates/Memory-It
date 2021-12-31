import React from 'react'
import Section from './Section'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
    min-height: 100vh;
    background: rgb(223, 233, 223);
    padding: 0.4rem;
    margin: 0.4rem;
    border: 2px solid rgb(5, 5, 59);
`
const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border: 1px solid red;
  flex: 1.5 0 0;  
` 
const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border: 1px solid red;
  flex: 8.5 0 0;   
`


function MyPost() {
  return (
    <Container>
      <SidebarBox><Sidebar /></SidebarBox>
      <SectionBox><Section /></SectionBox>
      
      
    </Container>
  )
}
  
export default MyPost