import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [test, setTest] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000', { withCredentials: true }).then((data) => {
      console.log(data)
      setTest(data.data)
    })
  }, [])

  return (
    <>
      <div>hello </div>
      <div>서버 연결:{test}</div>
    </>
  )
}

export default App
