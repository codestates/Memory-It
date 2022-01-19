import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPost from './MyPost'
import NotFound from './component/NotFound'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DiaryType from './component/article/DiaryType'
import './global.css'

// import MapType from './component/article/MapType'
import ColorMap from './component/article/ColorMap'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyPost />}>
          <Route path="/" element={<DiaryType />}></Route>
          {/* <Route path="/map" element={<MapType />}></Route> */}
          <Route path="/color-map" element={<ColorMap />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
