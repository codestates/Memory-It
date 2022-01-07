import React from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux' 
import "./Body.css"


const LoginButton = styled.button`
  border-radius: 20px;
  border: 1px solid #faff22;
  background-color: #faff22;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 35px;
  letter-spacing: 1px;
  transition: transform 80ms linear;
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`

const SingupButtonWeb = styled(LoginButton)`
  background-color: transparent;
  color: white;
`

const SingupButtonMobile = styled(SingupButtonWeb)`
  color: black;
  opacity: 0;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`

const Container = styled.div`
	background-color: #fff;
	border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
	0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
  @media screen and (max-width: 768px) {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 360px;
  max-width: 100%;
  min-height: 480px;
}`

const Loginbox = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.1s linear;
  left: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  h1 {
    margin-top: 55px;
  }
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 25px 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;
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

const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.1s linear;
  /* background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C); */
  background: rgb(250, 255, 34);
  background: linear-gradient(
    90deg,
    rgba(250, 255, 34, 1) 0%,
    rgba(64, 189, 0, 1) 50%,
    rgba(0, 164, 255, 1) 100%
  );
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

const Login = () => {

  const navigate = useNavigate()
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()  

  const handleLogin = () => {
    dispatch(changeToLoginTrue())
    navigate('/')
  }

  const handleGoToSignUp = () => {
    navigate('/signup')
  }

  return (
    <Container>
      <Form>
        <Loginbox>
          <h1>LOGIN</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
          <SingupButtonMobile>go to SIGN UP</SingupButtonMobile>
        </Loginbox>
      </Form>
      <Panel>
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <SingupButtonWeb onClick={handleGoToSignUp}>SIGN UP</SingupButtonWeb>
      </Panel>
    </Container>
  )
}

export default Login