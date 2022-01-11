import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'
import { AiFillFacebook } from "react-icons/ai"
import { SiKakaotalk } from "react-icons/si"
import { SiNaver } from "react-icons/si"

export const SignupButton = styled.button`
  border-radius: 20px;
  border: 1px solid #f71d43;
  background-color: #f71d43;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 1rem;
  letter-spacing: 1px;
  transition: transform 80ms linear;
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`

const LoginButtonWeb = styled(SignupButton)`
  background-color: transparent;
  color: white;
`

const LoginButtonMobile = styled(LoginButtonWeb)`
  color: black;
  margin-top: 10px;
  opacity: 0;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`

const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 360px;
    max-width: 100%;
    min-height: 480px;
  }

  @media screen and (max-width: 320px) {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 320px;
    max-width: 100%;
    min-height: 480px;
  }
`

export const Signupbox = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.1s linear;
  left: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 5px 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`

export const Panel = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: left 0.2s linear;
  background: rgb(119, 0, 255);
  background: linear-gradient(90deg, rgba(119, 0, 255, 1) 0%, rgba(255, 0, 0, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 0;
  }
`
const SocialBtn = styled.p`
  span:first-child {
    color: #3b5998;
    margin: 5px;
  }
  span:nth-child(2) {
    color: #f9e000;
    margin: 5px;
  }
  span:nth-child(3) {
    color: #2db400;
    margin: 10px;
  } 
`

const Singup = () => {
  const panel = useRef(null)
  const navigate = useNavigate()
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(changeToLoginTrue())
    dispatch(welcomeMode())
    dispatch(changeToDiaryTrue())
    navigate('/')
  }

  const handleGoToLogin = () => {
    navigate('/login')
  }

  return (
    <body>
      <Container>
        <Form>
          <Signupbox>
            <h1>SIGN UP</h1>
            <input type="username" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <SocialBtn>
              <span>
                <AiFillFacebook size="30" />
              </span>
              <span>
                <SiKakaotalk size="27" />
              </span>
              <span>
                <SiNaver size="27" />
              </span>
            </SocialBtn>
            <SignupButton onClick={handleLogin}>SIGN UP</SignupButton>
            <LoginButtonMobile>go to LOGIN</LoginButtonMobile>
          </Signupbox>
        </Form>
        <Panel>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <LoginButtonWeb onClick={handleGoToLogin}>LOGIN</LoginButtonWeb>
        </Panel>
      </Container>
    </body>
  )
}

export default Singup
