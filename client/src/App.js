import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyPost from './component/MyPost'
import Sidebar from './component/Sidebar'
import Singup from './pages/Signup'
import Login from './pages/Login'




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
      
      <MyPost />
    </>
    
  )
}

export default App
