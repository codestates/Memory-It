import React, { useEffect, useState } from 'react'
import MyPost from './component/MyPost'
import './global.css'

// 테스트용 컴포넌트
import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'
import Login from './pages/Login'

function App() {
  return (
    <>
      {/* <MyPost /> */}
      <Login />
      {/* <ResponseTester /> */}
      {/* <CookieTester /> */}
      {/* <Testercss /> */}
    </>
  )
}

export default App
