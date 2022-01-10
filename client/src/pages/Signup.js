import React, { useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'
import kakaoLoginBtn from '../kakao_login_button.png'
import naverLoginBtn from '../naver_login_button.png'
import facebookLoginBtn from '../facebook_login_button.png'

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
  width: 80%;
  max-width: 60rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
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
    margin: 5px 0;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    left: 0;
    width: 100%;
  }
`

export const Panel = styled.div`
  position: absolute;
  top: 0;
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
const SocialBtnFacebook = styled.button`
  background: transparent;
  border: none;
  img {
    width: 35px;
    height: 35px;
  }
`
const SocialBtnKakao = styled.button`
  background: transparent;
  border: none;
  img {
    width: 40px;
    height: 40px;
  }
`
const SocialBtnNaver = styled.button`
  background: transparent;
  border: none;
  img {
    width: 35px;
    height: 35px;
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
    <Container>
      <Form>
        <Signupbox>
          <h1>SIGN UP</h1>
          <input type="username" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <p>
            <SocialBtnFacebook>
              <img src={facebookLoginBtn} />
            </SocialBtnFacebook>
            <SocialBtnKakao>
              <img src={kakaoLoginBtn} />
            </SocialBtnKakao>
            <SocialBtnNaver>
              <img src={naverLoginBtn} />
            </SocialBtnNaver>
          </p>
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
