import React, { useEffect, useState } from "react"
import axios from "axios"
import MyPost from "./component/MyPost"
import Sidebar from "./component/Sidebar"

// 테스트용 컴포넌트
import ResponseTester from "./servertest/tester"

function App() {
  return (
    <>
      {/* <MyPost /> */}
      <ResponseTester />
    </>
  )
}

export default App
