import React, { useEffect, useState } from 'react'
import MyPost from './component/MyPost'

// 테스트용 컴포넌트
// import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'

function App() {
  return (
    <>
      <MyPost />
      {/* <CookieTester /> */}
    </>
  )
}

export default App
