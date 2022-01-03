import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LOC, LOCTEST } from './word'

const ResponseTester = () => {
  const [ttt, setTtt] = useState('default..')

  useEffect(() => {
    axios.get(LOC).then(res => {
      setTtt(res.data)
    })
  }, [])

  const onTest = () => {
    axios.get(LOCTEST).then(res => {
      setTtt(res.data)
    })
  }

  return (
    <>
      <div>server test1: {ttt}</div>
      <button onClick={onTest}>btn</button>
    </>
  )
}

export default ResponseTester
