import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'
import { SiKakaotalk } from 'react-icons/si'
import { SiNaver } from 'react-icons/si'
import axios from 'axios'
import KakaoLogin from './KakaoLogin'
import NaverLogin from './NaverLogin'

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
  cursor: grab;
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
  display: none;
  color: black;
  margin-top: 10px;
  cursor: default;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: grab;
  }
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
  p {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 0;
  }
`
const SocialBtn = styled.p`
  span:first-child {
    color: #f9e000;
    margin: 5px;
  }
  span:nth-child(2) {
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
  const alertBox = useRef()

  const [signupText, setSignupText] = useState('signup')
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    password: '',
    retypepass: '',
  })

  const handleInputValue = key => e => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value })
  }

  useEffect(() => {
    setSignupText('signup')
    alertBox.current.classList.remove('alert')
  }, [signupInfo])

  var regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  var regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/

  const handleSignup = async () => {
    const { username, email, password, retypepass } = signupInfo
    if (!email || !password || !username) {
      alertBox.current.classList.add('alert')
      setSignupText('모든 항목은 필수입니다.')
    } else if (regEmail.test(email) === false) {
      alertBox.current.classList.add('alert')
      setSignupText('이메일 형식이 아닙니다.')
    } else if (regPw.test(password) === false) {
      alertBox.current.classList.add('alert')
      setSignupText(
        '숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력하십시오.'
      )
    } else if (password !== retypepass) {
      alertBox.current.classList.add('alert')
      setSignupText('비밀번호가 일치 하지 않습니다.')
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_SERVE}/users/signup`,
          { email, username, password },
          { withCredentials: true }
        )
        .then(res => {
          alert('회원가입이 완료되었습니다.')
          dispatch(changeToLoginTrue())
          dispatch(welcomeMode())
          dispatch(changeToDiaryTrue())
          navigate('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const handleGoToLogin = () => {
    navigate('/login')
  }

  const onKeyUp = e => {
    if (e.key == 'Enter') {
      handleSignup()
    }
  }

  return (
    <div className="body">
      <Container>
        <Form>
          <Signupbox>
            <h1>SIGN UP</h1>
            <input
              type="username"
              placeholder="Username"
              onChange={handleInputValue('username')}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleInputValue('email')}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleInputValue('password')}
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={handleInputValue('retypepass')}
              onKeyUp={onKeyUp}
            />
            <SocialBtn>
              <span>
                <KakaoLogin></KakaoLogin>
              </span>
              <span>
                <NaverLogin></NaverLogin>
              </span>
            </SocialBtn>
            <SignupButton ref={alertBox} onClick={handleSignup}>
              {signupText}
            </SignupButton>
            <LoginButtonMobile onClick={handleGoToLogin}>go to LOGIN</LoginButtonMobile>
          </Signupbox>
        </Form>
        <Panel>
          <h1>Memory-it으로</h1>
          <p>추억이 깃든 장소를</p>
          <p>사진과 함께 지도 위에 아로새겨보세요</p>
          <LoginButtonWeb onClick={handleGoToLogin}>LOGIN</LoginButtonWeb>
        </Panel>
      </Container>
    </div>
  )
}

export default Singup
