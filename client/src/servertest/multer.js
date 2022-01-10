import axios from 'axios'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { combineReducers } from 'redux'

const colors = ['yellow', 'green', 'red', 'blue', 'purple']

const MoodWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Mood = styled.div`
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  &:hover {
    border: 3px solid pink;
  }
`
const Container = styled.div`
  background-color: #fff;
  width: 80%;
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
  width: 100px;
  height: 100px;
`
const HiddenFileUploadBtn = styled.input`
  display: none;
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
const DescriptionAreaWrap = styled.div`
  padding: 50px 0px 50px 0px;
`
const DescriptionArea = styled.textarea`
  height: auto;
  max-width: 600px;
  color: #999;
  font-weight: 400;
  font-size: 13px;
  width:100%;
  background:#fff;
  border-radius:3px;
  line-height:2em;
  border:none;
  box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);
  padding:30px;
  -webkit-transition: height 2s ease;
  -moz-transition: height 2s ease;
  -ms-transition: height 2s ease;
  -o-transition: height 2s ease;
  transition: height 2s ease;
`
const DeleteSelectedPicBtn = styled.button`
  margin: 20px;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px 30px 10px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0;
  ::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
  }
  :hover::after {
    top: 0px;
    left: 0px;
  }
`
const FileNameWrap = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;

  p {
    font-size: 11px;
    margin: 5px;
  }
`
const SubmitBtn = styled.input`
  margin: 20px;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px 30px 10px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0;
  ::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
  }
    :hover::after {
    top: 0px;
    left: 0px;
  }
`

const ResponseTester = () => {
  const [fileUrl, setFileUrl] = useState([])
  const [imgTitle, setImgTitle] = useState([])
  const [isLogined, setIsLogined] = useState(false)

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
        withCredentials: true,
      })
      .then(res => console.log(res))
      .catch(err => {
        console.error(err.message)
      })
  }

  const processImage = event => {
    const imageFile = event.target.files;
    const fileName = imageFile.name;
    let files = [];
    let filesNames = [];

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      const imageName = imageFile[i].name;

      files.push(imageUrl);
      filesNames.push(imageName);
    }

    setFileUrl(files)
    setImgTitle(filesNames)
  }

  const deleteFileImage = () => {
    setFileUrl([]);
    setImgTitle([]);
  }


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
              <p>
                {fileUrl.map((items, index) => (
                  <ImageFileWrap key={index} src={items} />
                ))}
              </p>
            )}
          </div>
        </LabelStyling>
        <FileUpload>
          <div>
            {imgTitle.length === 0 ? (
              <p>파일을 선택해주세요</p>
            ) : (
              <FileNameWrap>File Name: 
                {imgTitle.map((items, index) => (
                  <p key={index}>{items}</p>
                ))}
              </FileNameWrap>
            )}
          </div>
          <div>
            <DeleteSelectedPicBtn type='button' onClick={deleteFileImage}>UNSELECT</DeleteSelectedPicBtn>
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

        <MoodWrapper>
          {colors.map((v, i) => (
            <Mood color={v} key={i}></Mood>
          ))}
        </MoodWrapper>
        <DescriptionAreaWrap>
          <DescriptionArea placeholder="오늘은 어떤 일이 있었나요? 또 어떤 기분이었나요?" />
        </DescriptionAreaWrap>
        <br></br>
        <div>
          <input type="text" onChange={onBodyChange('content')} />
          <input onChange={onBodyChange('emotions')} />
          <input type="text" onChange={onBodyChange('lat')} />
          <input type="text" onChange={onBodyChange('lng')} />
          <SubmitBtn type="submit" accept="image/*" onClick={onTest} value='SUBMIT' />
        </div>
      </Container>
      <img src={ttt}></img>
      {/* <button onClick={onTest}>btn</button> */}
    </>
  )
}

export default ResponseTester
