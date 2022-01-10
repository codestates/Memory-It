import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPost from './MyPost'
import NotFound from './component/NotFound'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './global.css'

import EditUserInfo from './component/rightbar/EditUserInfo' 

// 테스트용 컴포넌트
// import ResponseTester from './servertest/multer'
// import CookieTester from './servertest/cookie'
// import PostKakaomapTester from './servertest/post_kakaomap'
// import GetKakaoMapTester from './servertest/get_kakaomap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyPost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
