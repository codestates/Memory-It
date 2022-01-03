import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyPost from './component/MyPost'
import Sidebar from './component/Sidebar'

import ResponseTester from './servertest/serv'
const serverTestMode = false

function App() {
  // const [test, setTest] = useState('disconnection')

  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_EC2, { withCredentials: true }).then((data) => {
  //     console.log(data)
  //     setTest(data.data)
  //   })
  // }, [])

  return (
    <>
      {serverTestMode ? <ResponseTester /> : <MyPost />}
      {/* <MyPost /> */}
    </>
  )
}

export default App
