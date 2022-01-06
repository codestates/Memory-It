import axios from 'axios'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import allMood from '../static/allMood.png'
import yellowMood from '../static/yellowMood.png'
import greenMood from '../static/greenMood.png'
import redMood from '../static/redMood.png'
import blueMood from '../static/blueMood.png'
import violetMood from '../static/violetMood.png'

const Container = styled.div`
  background-color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
`
const LabelStyling = styled.div`
  margin-top: 20px;
  border: 4px dashed #f9fc6a;
  position: relative;
  :hover {
    background-color: #f9fc6a;
    border: 4px dashed #ffffff;
  }
`
const ImageUploadWrap = styled.label`
  h3 {
    color: lightgray;
  }
`
const ImageFileWrap = styled.img`
  width: 80%;
`
const HiddenFileUploadBtn = styled.input`
  display: block;
`
const ImageIcon = styled.i`
  color: lightgray;
  padding: 30px;
`
const FileUpload = styled.div`
  background-color: #ffffff;
  width: 50%;
  margin: 0 auto;
  padding: 35px 0px 35px 0px;
`
const Mood = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 6px;
  &:hover {
    border: 5px solid pink;
  }
`
const DescreiptionAreaWrap = styled.div`
  padding: 50px 0px 50px 0px;
`
const DescreiptionArea = styled.input`
  border: 0 solid black;
  border-bottom: 1px solid black;
  width: 55%;
  height: 35%;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    text-align: center;
  }
`

const ResponseTester = () => {
  const [fileUrl, setFileUrl] = useState([])
  const [imgTitle, setImgTitle] = useState([])

  const [ttt, setTTT] = useState('')
  const [body, setBody] = useState({
    content: '',
    emotions: [],
    lat: '',
    lng: '',
  })

  const img = useRef()

  // console.log(body)
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

  const processImage = event => {
    // const imageFile = event.target.files[0];
    // const fileName = imageFile.name
    // const imageUrl = URL.createObjectURL(imageFile);
    // setFileUrl(imageUrl)
    // setImgTitle(fileName)

    const imageFile = event.target.files
    let files = []

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      files.push(imageUrl)
    }

    setFileUrl(files)
  }
  // console.log(fileUrl)
  return (
    <>
      <div>server test</div>
      <Container>
        <LabelStyling>
          <div>
            {fileUrl.length === 0 ? (
              <ImageUploadWrap htmlFor="chooseFile">
                <ImageIcon className="fas fa-plus fa-8x"></ImageIcon>
                <h3>클릭하여 사진 업로드</h3>
              </ImageUploadWrap>
            ) : (
              <ImageFileWrap src={fileUrl[0]} />
            )}
          </div>
        </LabelStyling>
        <FileUpload>
          <div>
            {imgTitle.length === 0 ? (
              <p>No Files Selected</p>
            ) : (
              <p>File Name: {imgTitle}</p>
            )}
          </div>
          <HiddenFileUploadBtn
            ref={img}
            type="file"
            id="chooseFile"
            name="postingImages"
            onChange={processImage}
            accept="image/*"
            formEncType="multipart/form-data"
            multiple
          />
        </FileUpload>

        <Mood src={allMood} />
        <Mood src={yellowMood} />
        <Mood src={greenMood} />
        <Mood src={redMood} />
        <Mood src={blueMood} />
        <Mood src={violetMood} />

        <DescreiptionAreaWrap>
          <DescreiptionArea placeholder="오늘은 어떤 일이 있었나요? 또 어떤 기분이었나요?" />
        </DescreiptionAreaWrap>
        <br></br>
        <div>
          <input type="text" onChange={onBodyChange('content')} />
          <input onChange={onBodyChange('emotions')} />
          <input type="text" onChange={onBodyChange('lat')} />
          <input type="text" onChange={onBodyChange('lng')} />
          <input type="submit" accept="image/*" onClick={onTest} />
        </div>
      </Container>
      <img src={ttt}></img>
      {/* <button onClick={onTest}>btn</button> */}
    </>
  )
}

export default ResponseTester
