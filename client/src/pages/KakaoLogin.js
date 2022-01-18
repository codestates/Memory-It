// import dotenv from 'dotenv'
import React from 'react'
import axios from 'axios'
import { SiKakaotalk } from 'react-icons/si'
// dotenv.config()

const KakaoLogin = props => {
  const redirectUrl = () => {
    window.location.replace(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_CLIENT_CALLBACK_URL}&response_type=code`
      //   'https://kauth.kakao.com/oauth/authorize?client_id=7a15a8d44b88c4a6cc057ca28ad75307&redirect_uri=http://localhost:3000/login&response_type=code'
    )
  }
  return (
    <>
      <SiKakaotalk size="27" onClick={redirectUrl} />
    </>
  )
}

export default KakaoLogin

{
  /* <input className="mypage-btn" type="button" value="Github Login" onClick={redirectUrl} />  */
}
