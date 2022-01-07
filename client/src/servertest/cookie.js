import React from 'react'
import axios from 'axios'

const CookieTester = () => {
  const login = () => {
    axios
      .post(
        'http://localhost:8081/users/login',
        {
          email: 'a1@code.com',
          password: '!1641480594112',
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  const logout = () => {
    axios
      .get('http://localhost:8081/users/logout', {
        withCredentials: true,
      })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const modifyUserInfo = () => {
    axios
      .post(
        'http://localhost:8081/users/modifyUserInfo',
        {
          password: '!' + Date.now(),
        },
        {
          withCredentials: true,
        }
      )
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  const withdrawal = () => {
    axios
      .delete('http://localhost:8081/users', {
        withCredentials: true,
      })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  return (
    <>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
      <button onClick={modifyUserInfo}>비밀번호변경요청</button>
      <button onClick={withdrawal}>회원탈퇴</button>
    </>
  )
}

export default CookieTester
