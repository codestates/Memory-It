// import dotenv from 'dotenv'
import React from 'react'
import axios from 'axios'
import { SiNaver } from 'react-icons/si'
// dotenv.config()

const NaverLogin = props => {
  const redirectUrl = () => {
    window.location.replace(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.REACT_APP_NAVER__CLIENT_CALLBACK_URL}`
      //   https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=OKsFngbElDmndKGDCWWQ&state=STATE_STRING&redirect_uri=http://localhost:3000/login
    )
  }
  return (
    <>
      <SiNaver size="27" onClick={redirectUrl} />
    </>
  )
}

export default NaverLogin