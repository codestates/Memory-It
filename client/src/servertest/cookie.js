import React from 'react'
import axios from 'axios'

const CookieTester = () => {
  const login = () => {
    axios
      .post(
        'http://localhost:8081/users/login',
        {
          email: 'aaa@code.com',
          password: '!@#$1234qwer',
        },
        { withCredentials: true }
      )
      .then(res => console.log(res))
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
      <button onClick={withdrawal}>회원탈퇴</button>
    </>
  )
}

export default CookieTester
