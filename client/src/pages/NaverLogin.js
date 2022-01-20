// import dotenv from 'dotenv'
import React from 'react'
import axios from 'axios'
import { SiNaver } from 'react-icons/si'
// dotenv.config()

const NaverLogin = props => {
  //리다이랙트되는 뒷부분만 프롭스로 내려줘라
  const redirectUrl = () => {
    window.location.replace(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER}&state=STATE_STRING&redirect_uri=${process.env.REACT_APP_SNS}/sns`
    )
  }
  return (
    <>
      <SiNaver size="27" onClick={redirectUrl} style={{ cursor: 'pointer' }} />
    </>
  )
}

export default NaverLogin
