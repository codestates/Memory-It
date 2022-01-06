import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPost from './MyPost'
import NotFound from './component/NotFound'
import './global.css'

// 테스트용 컴포넌트
import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MyPost />}></Route>
      <Route path='*' element={<NotFound />} ></Route>
    </Routes>
  )
}

export default App
