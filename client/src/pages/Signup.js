import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  width: 80%;
  max-width: 60rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  min-height: 480px;

  @media screen and (max-width: 600px) {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 360px;
    max-width: 100%;
    min-height: 480px;
  }
`

export const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  height: 30rem;
`

const JoinSelector = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  width: 50%;
  height: 100%;
`

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => (props.white ? 'white' : 'black')};
  max-width: 18rem;
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  margin: 0.5rem 0;
  font-size: 0.7rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    /* box-shadow:  */
  }
`

export const Signupbox = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.1s linear;

  left: 50%;
  width: 50%;
  height: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    left: 0;
    width: 100%;
  }
`
const Back = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background-color: #f71d43;
  border-radius: 20px;
`

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 50%; //
  width: 50%;
  height: 30rem;
  overflow: hidden;
  transition: left 0.2s linear;
  z-index: 100;

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

  @media screen and (max-width: 600px) {
    width: 0;
  }
`

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
  margin-top: 20px;
  opacity: 0;
  @media screen and (max-width: 600px) {
    opacity: 1;
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

  const onSignup = n => {
    panel.current.style = `left: ${n}%;`
  }

  return (
    <Page>
      <Container>
        <Form>
          <JoinSelector>
            <LoginButton bgColor="#F9E000">카카오 계정 로그인</LoginButton>
            <LoginButton bgColor="#2DB400" white>
              네이버 계정 로그인
            </LoginButton>
            <LoginButton bgColor="#3B5998" white>
              페이스북 계정 로그인
            </LoginButton>
            <LoginButton bgColor="#FF9900" white onClick={() => onSignup(0)}>
              Memory it 회원가입
            </LoginButton>
          </JoinSelector>
          <Signupbox>
            <Back onClick={() => onSignup(50)} />
            <h1>SIGN UP</h1>
            <input type="username" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <SignupButton onClick={handleLogin}>SIGN UP</SignupButton>
            <LoginButtonMobile onClick={handleGoToLogin}>go to LOGIN</LoginButtonMobile>
          </Signupbox>
        </Form>
        <Panel ref={panel}>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <LoginButtonWeb onClick={handleGoToLogin}>LOGIN</LoginButtonWeb>
        </Panel>
      </Container>
    </Page>
  )
}

export default Singup
