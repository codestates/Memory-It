import axios from 'axios'
import React, { useRef, useState } from 'react'

const ResponseTester = () => {
  const [ttt, setTTT] = useState('')
  const [body, setBody] = useState({
    content: '',
    emotions: [],
    lat: '',
    lng: '',
  })

  const img = useRef()

  console.log(body)
  const onBodyChange = key => e => {
    if (key === 'emotions') {
      const ems = e.target.value.split('')
      setBody({ ...body, [key]: ems })
    } else {
      setBody({ ...body, [key]: e.target.value })
    }
  }

  const onTest = e => {
    e.preventDefault()
    const image = img.current.files
    // console.log(image[0])
    // const url = URL.createObjectURL(image[0])
    // setTTT(url)
    const formData = new FormData()
    for (let i = 0; i < image.length; i++) {
      formData.append('postingImages', image[i])
    }
    formData.append('data', JSON.stringify(body))

    axios
      .post('http://localhost:8081/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => console.log(res))
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div>server test</div>
      <form>
        <input
          ref={img}
          type="file"
          name="postingImages"
          formEncType="multipart/form-data"
          multiple
        ></input>
        <input type="text" onChange={onBodyChange('content')}></input>
        <input onChange={onBodyChange('emotions')}></input>
        <input type="text" onChange={onBodyChange('lat')}></input>
        <input type="text" onChange={onBodyChange('lng')}></input>
        <input type="submit" accept="image/*" onClick={onTest}></input>
      </form>
      <img src={ttt}></img>
      {/* <button onClick={onTest}>btn</button> */}
    </>
  )
}

export default ResponseTester
