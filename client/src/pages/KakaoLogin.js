// import dotenv from 'dotenv'
import React from 'react'
import axios from 'axios'
import { SiKakaotalk } from 'react-icons/si'
// dotenv.config()

const KakaoLogin = props => {
  //리다이랙트되는 뒷부분만 프롭스로 내려줘라
  const redirectUrl = () => {
    window.location.replace(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO}&redirect_uri=${process.env.REACT_APP_SNS}/sns&response_type=code`
    )
  }
  return (
    <>
      <SiKakaotalk size="27" onClick={redirectUrl} style={{ cursor: 'pointer' }} />
    </>
  )
}

export default KakaoLogin

{
  /* <input className="mypage-btn" type="button" value="Github Login" onClick={redirectUrl} />  */
}
