import React, { useRef } from 'react'
import Section from './component/Section'
import Sidebar from './component/Sidebar'
import RightBar from './component/RightBar'
import styled from 'styled-components'
import MobileNavigator from './component/mobile/MobileNavigator'
import { BsLayoutSidebarInsetReverse } from 'react-icons/bs'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 40rem;
  height: 100vh;
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
  height: 100%;

  transition: ease-out 0.3s;
`

const RightBarBox = styled.div`
  @media only screen and (max-width: 900px) {
    position: fixed;
    z-index: 10;
    display: flex;
    width: 100%;

    /* border-left: 1px solid #ff9900; */
    &.selected {
      right: 0px;
    }
    &.hide {
      right: -100%;
    }
    transition: ease 0.5s;
  }
  display: flex;
  width: 800px;
  height: 100%;
  background-color: white;
`

const MobileNavigatorWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    position: fixed;
    z-index: 20;
    display: flex;
    bottom: 0;

    align-items: center;
    justify-content: space-around;
    height: 60px;
    min-width: 25rem;
    max-width: 40rem;
    width: 80%;
    background-color: white;
    padding: 0 1rem;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }
  user-select: none;
  display: none;
  .icon-m {
    color: #898989;
    width: 1.8rem;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: #ff9900;
    }
  }
`

function MyPost() {
  const rightBarRef = useRef(null)
  // const toggleMobileRef = useRef(null)

  // const onSelect = () => {
  //   const classList = rightBarRef.current.classList
  //   if (Object.values(classList).includes('hide')) {
  //     classList.remove('hide')
  //     classList.add('selected')
  //   } else {
  //     classList.add('hide')
  //     classList.remove('selected')
  //   }
  // }

  return (
    <Container>
      <SidebarBox>
        <Sidebar />
      </SidebarBox>
      <SectionBox>
        <Section ref={{ rightBarRef }} />
      </SectionBox>
      <RightBarBox ref={rightBarRef} className="hide">
        <RightBar />
      </RightBarBox>
      <MobileNavigatorWrapper>
        <MobileNavigator ref={{ rightBarRef }} />
      </MobileNavigatorWrapper>
    </Container>
  )
}

export default MyPost
