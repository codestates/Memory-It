import React from "react"
import styled from "styled-components"
import unhappy from '../unhappy.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: block;
    div {
      margin-left: 70px;
    }
  }
  @media screen and (max-width: 320px) {
    display: block;
    div {
      margin-left: 70px;
    }
  }
`
const Emoji = styled.img`
  width: 300px;
  height: 300px;
  margin: 35px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
    margin-top: 15px;
  }
`
const BodyDiv = styled.div`
  margin-right: 70px;
  h1 {
    font-size: 7.5em;
    margin: 0px 0px;
    font-weight: bold;
  }
  h2 {
    font-weight: bold;
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 5em;
      margin: 0px;
    }
  }
`
const HomeBtn = styled.button`
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border: 5px solid #ffff66; 
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px 0px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: #ffff66;
    z-index: -1;
    transition: 0.2s ease;
    }
  &:hover {
    color: black;
    background: #ffff66;
    transition: 0.2s ease;
    &:before {
      width: 100%;
    }
  }
`

export default function NotFound () {
  return (
    <Container>
      <Emoji src={unhappy} />
      <BodyDiv>
        <h1>404</h1>
        <h2>UH OH! You are lost.</h2>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <HomeBtn>HOME</HomeBtn>
      </BodyDiv>
    </Container>
  )
}