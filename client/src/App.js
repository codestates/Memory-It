import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPost from './MyPost'
import NotFound from './component/NotFound'
// import Signup from './pages/Signup'
import Login from './pages/Login'
import ModifyUserInfo from './component/rightbar/ModifyUserInfo'
import DetailedPost from './component/rightbar/DetailedPost'
import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'
import MapType from './component/MapType'
import './global.css'

// 테스트용 컴포넌트
import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'
import KakaomapTester from './servertest/kakaomap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyPost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/signup" element={<Signup />}></Route> */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

  // <ResponseTester />
  )
}

export default App
