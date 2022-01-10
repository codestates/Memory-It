import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'
import { Container, Form, Page, Panel, Signupbox, SignupButton } from './Signup'

const LoginButton = styled(SignupButton)`
  border: 1px solid #faff22;
  background-color: #faff22;
`
const SingupButtonWeb = styled(LoginButton)`
  background-color: transparent;
  color: white;
`
const SingupButtonMobile = styled(SingupButtonWeb)`
  color: black;
  opacity: 0;
  @media screen and (max-width: 600px) {
    opacity: 1;
  }
`

const Loginbox = styled(Signupbox)`
  left: 0;
`

const LoginPanel = styled(Panel)`
  right: 0;
  background: rgb(250, 255, 34);
  background: linear-gradient(
    90deg,
    rgba(250, 255, 34, 1) 0%,
    rgba(64, 189, 0, 1) 50%,
    rgba(0, 164, 255, 1) 100%
  );
`

const Login = () => {
  const navigate = useNavigate()
  const state = useSelector(state => state.loginReducer)
  const { isLogin } = state
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(changeToLoginTrue())
    dispatch(changeToDiaryTrue())
    dispatch(welcomeMode())
    navigate('/')
  }

  const handleGoToSignUp = () => {
    navigate('/signup')
  }

  return (
    <Page>
      <Container>
        <Form>
          <Loginbox>
            <h1>LOGIN</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
            <SingupButtonMobile onClick={handleGoToSignUp}>
              go to SIGN UP
            </SingupButtonMobile>
          </Loginbox>
        </Form>
        <LoginPanel>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <SingupButtonWeb onClick={handleGoToSignUp}>SIGN UP</SingupButtonWeb>
        </LoginPanel>
      </Container>
    </Page>
  )
}

export default Login
