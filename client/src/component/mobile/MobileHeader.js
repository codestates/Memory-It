import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  width: 100%;
  div {
    margin-left: 1rem;
  }
`

const Logo = styled.h2`
  position: absolute;
  left: 0;
`

const MobileHeader = () => {
  return (
    <>
      <MenuWrapper>
        <Logo>Memory It</Logo>
        <div>logout</div>
      </MenuWrapper>
    </>
  )
}

export default MobileHeader
