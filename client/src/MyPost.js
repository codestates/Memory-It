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
    position: fixed;
    z-index: 10;
    display: flex;
    width: 100%;

    border-left: 1px solid #ff9900;
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

const RightBarToggleMobile = styled.div`
  @media only screen and (max-width: 900px) {
    position: absolute;
    z-index: 30;
    top: 44%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100px;
    background-color: white;

    /* .sidebar-t {
      display: none;
    }
    &:hover {
      .arrow-t {
        display: none;
      }
      .sidebar-t {
        display: block;
      } */
    }

    &.right-on {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: 1px solid #ff9900;
      border-bottom: 1px solid #ff9900;
      border-right: 1px solid #ff9900;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
      left: -1px;
      .arrow-t {
        transform: rotate(0.5turn);
      }
      .sidebar-t {
        transform: rotate(0.5turn);
      }
    }
    &.right-off {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border-top: 1px solid #ff9900;
      border-bottom: 1px solid #ff9900;
      border-left: 1px solid #ff9900;
      box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.3);
      left: -40px;
    }
    transition-delay: 0.6s;
    transition-duration: 0.3s;
    cursor: pointer;
  }
  display: none;
`

const ToggleIconArrow = styled(MdKeyboardArrowLeft)``
const ToggleIconSidebar = styled(BsLayoutSidebarInsetReverse)``

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

  const onSelect = () => {
    const classList = rightBarRef.current.classList
    if (Object.values(classList).includes('hide')) {
      // toggleMobileRef.current.classList.remove('right-off')
      // toggleMobileRef.current.classList.add('right-on')
      classList.remove('hide')
      classList.add('selected')
    } else {
      // toggleMobileRef.current.classList.remove('right-on')
      // toggleMobileRef.current.classList.add('right-off')
      classList.add('hide')
      classList.remove('selected')
    }
  }

  return (
    <Container>
      <SidebarBox>
        <Sidebar />
      </SidebarBox>
      <SectionBox>
        <Section />
      </SectionBox>
      <RightBarBox ref={rightBarRef} className="hide">
        {/* <RightBarToggleMobile
          ref={toggleMobileRef}
          className="right-off"
          onClick={onSelect}
        >
          <ToggleIconArrow
            className="arrow-t"
            style={{ width: '2rem', height: '2rem' }}
          />
          <ToggleIconSidebar
            className="sidebar-t"
            style={{ width: '1.3rem', height: '1.3rem' }}
          />
        </RightBarToggleMobile> */}
        <RightBar />
      </RightBarBox>
      <MobileNavigatorWrapper>
        {/* <MobileNavigator ref={{ rightBarRef, toggleMobileRef }} /> */}
        <MobileNavigator ref={{ rightBarRef }} />
      </MobileNavigatorWrapper>
    </Container>
  )
}

export default MyPost
