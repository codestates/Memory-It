import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPost from './MyPost'
import NotFound from './component/NotFound'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DiaryType from './component/article/DiaryType'
import './global.css'

import MapType from './component/article/MapType'
import ColorMap from './component/article/ColorMap'

// import PostingMap from '../src/component/rightbar/PostingMap'

// 테스트용 컴포넌트
// import ResponseTester from './servertest/multer'
import CookieTester from './servertest/cookie'
import LatLang from './servertest/latlang'
// import PostKakaomapTester from './servertest/post_kakaomap'
// import GetKakaoMapTester from './servertest/get_kakaomap'
// import Getpost from './servertest/get_post'
// import LandingPage from './pages/LandingPage'

function App() {
  const [userPost, setUserPost] = useState()
  const showPosts = post => {
    // console.log(post)
    setUserPost(post)
  }
  // console.log(userPost)

  return (
    <>
      {/* <CookieTester /> */}
      {/* <LatLang></LatLang> */}
      <Routes>
        <Route path="/" element={<MyPost />}>
          <Route path="/" element={<DiaryType posts={showPosts} />}></Route>
          <Route path="/map" element={<MapType post={userPost} />}></Route>
          <Route path="/color-map" element={<ColorMap />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Getpost></Getpost> */}
      {/* <PostingMap />
      {/* <LandingPage /> */}
    </>
  )
}

export default App
