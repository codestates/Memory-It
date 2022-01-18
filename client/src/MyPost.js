import React, { useRef, useState } from 'react'
import Section from './component/Section'
import Sidebar from './component/Sidebar'
import RightBar from './component/RightBar'
import styled from 'styled-components'
import MobileNavigator from './component/mobile/MobileNavigator'
import { AiFillHome } from 'react-icons/ai'

const Container = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
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

  padding: 0.5rem;
  width: 230px;

  height: 100%;
  overflow: scroll;

  user-select: none;
  left: 0;
`
const SectionBox = styled.div`
  @media only screen and (max-width: 1180px) {
    margin-left: 0;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 230px;
  height: 100vh;
  background: white;
`

const RightBarBox = styled.div`
  @media only screen and (max-width: 1000px) {
    position: fixed; // 지금은 반드시 fixed해야함..
    /* z-index: 10; */
    z-index: 99;
    display: flex;
    width: 100%;

    &.selected {
      right: 0px;
    }
    &.hide {
      right: -100%;
    }
    transition: right ease 0.5s;
  }
  display: flex;
  min-width: 450px;
  background: rgb(248, 249, 250);
  min-height: 100vh;
  align-items: center;
`

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 3rem;
    height: 4rem;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 3px 3px 7px rgba(255, 153, 0, 0.5);
    cursor: pointer;
    transition: color 0.15s;
    &:hover {
      color: #ff9900;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 2rem;
    height: 3rem;
  }
  display: none;
`

const RightBarBoxCloseBtnM = styled(AiFillHome)`
  width: 80%;
  height: 80%;
  padding-bottom: 3px;
  padding-left: 5px;
`

const MobileNavigatorWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    position: fixed;
    z-index: 100;
    display: flex;
    bottom: 0;

    align-items: center;
    justify-content: space-around;
    height: 60px;
    min-width: 20rem;
    max-width: 40rem;
    width: 90%;
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
  .logoutBtn {
    color: #ff9900;
  }
`

function MyPost() {
  const rightBarRef = useRef(null)
  const [rer, setRer] = useState({})

  const onClose = () => {
    const classList = rightBarRef.current.classList
    classList.add('hide')
    classList.remove('selected')
  }

  return (
    <Container>
      <SidebarBox>
        <Sidebar />
      </SidebarBox>
      <SectionBox>
        <Section ref={{ rightBarRef }} rer={rer} />
      </SectionBox>
      <RightBarBox ref={rightBarRef} className="hide">
        <ButtonWrapper onClick={onClose}>
          <RightBarBoxCloseBtnM />
        </ButtonWrapper>
        <RightBar setRer={setRer} />
      </RightBarBox>
      <MobileNavigatorWrapper>
        <MobileNavigator ref={{ rightBarRef }} />
      </MobileNavigatorWrapper>
    </Container>
  )
}

export default MyPost
