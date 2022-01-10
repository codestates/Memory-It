import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux' 
import './Body.css'

const SignupButton = styled.button`
  border-radius: 20px;
  border: 1px solid #f71d43;
  background-color: #f71d43;
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

const LoginButtonWeb = styled(SignupButton)`
  background-color: transparent;
  color: white;
`

const LoginButtonMobile = styled(LoginButtonWeb)`
  color: black;
  margin-top: 20px;
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

const Signupbox = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.1s linear;

  left: 50%;
  width: 50%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 35px;
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
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
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.1s linear;
  z-index: 100;

  /* background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C); */
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

const Singup = () => {

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
    <Container>
      <Form>
        <Signupbox>
          <h1>SIGN UP</h1>
          <input type='username' placeholder='Username' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm password' />
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
  )
}

export default Singup
