import axios from 'axios'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { combineReducers } from 'redux'
import { welcomeMode, postingmapMode } from '../actions'

const colors = ['#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

const MoodWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Mood = styled.div`
  background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`
const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  padding: 0px 20px 20px 20px;
  text-align: center;
  overflow: auto;
  @media screen and (max-width: 375px) {
    height: 85%;
    padding: 0px;
    margin: 0 auto;
  }
`
const LabelStyling = styled.div`
  margin-top: 20px;
  border: 4px dashed #f9fc6a;
  position: relative;
  :hover {
    background-color: #f9fc6a;
    border: 4px dashed #ffffff;
  }
  @media screen and (max-width: 375px) {
  }
`
const ImageUploadWrap = styled.label`
  h3 {
    color: lightgray;
  }
  @media screen and (max-width: 375px) {
    h3 {
      font-size: 13px;
    }
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
  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`
const FileUpload = styled.div`
  background-color: #ffffff;
  width: 50%;
  margin: 0 auto;
  padding: 35px 0px 35px 0px;
  p {
    font-size : 15px;
  }
  @media screen and (max-width: 375px) {
    padding: 10px;
    p {
      font-size: 13px;
    }
  }
`
const DescriptionAreaWrap = styled.div`
  padding: 35px 0px 35px 0px;
`
const DescriptionArea = styled.textarea`
  height: auto;
  max-width: 600px;
  color: black;
  font-weight: 400;
  font-size: 13px;
  width: 100%;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 3px;
  line-height: 2em;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 30px;
  -webkit-transition: height 2s ease;
  -moz-transition: height 2s ease;
  -ms-transition: height 2s ease;
  -o-transition: height 2s ease;
  transition: height 2s ease;
  @media screen and (max-width:375px) {
    padding: 10px;
  }
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
  margin: 0px 13px 0px 0px;
  :hover {
    background-color: #ffe54c;
  }
  @media screen and (max-width: 375px) {
    margin: 10px 20px 15px 0px;
  }
`
const FileNameWrap = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: auto;
  margin: 0px 0px 15px 0px;
  p {
    font-size: 11px;
    margin: 5px;
  }
`
const SubmitBtn = styled.input.attrs({
  type: 'submit',
  value: 'NEXT',
})`
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
  :hover {
    background-color: #ffe54c;
  }
  :after {
    content: '';
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
const CloseBtnWrap = styled.div`
  padding: 10px;
  background-color: rgb(249, 250, 252);
  text-align: left;
  margin-top: 5px;
`
const CloseBtn = styled.span`
  float: right;
  display: inline-block;
  padding: 0px 0px 0px 0px;
  font-weight: 700;
  text-shadow: 0 1px 0 #fff;
  font-size: 2rem;
  color: gray;
  :hover {
    border: 0;
    cursor: pointer;
    opacity: 0.55;
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

  // console.log(body.content);

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
    const imageFile = event.target.files
    const fileName = imageFile.name
    let files = []
    let filesNames = []

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      const imageName = imageFile[i].name

      files.push(imageUrl)
      filesNames.push(imageName)
    }

    setFileUrl(files)
    setImgTitle(filesNames)
  }

  const deleteFileImage = () => {
    setFileUrl([])
    setImgTitle([])
  }

  const dispatch = useDispatch()
  const handleToInitialPage = () => {
    dispatch(welcomeMode())
  }

  const handleToPostingMapPage = () => {
    dispatch(postingmapMode())
  }

  const [isClicked, setIsClicked] = useState(Array(colors.length).fill(false))
  const handleMoodColorSelect = idx => {
    console.log(isClicked)
    console.log(idx)
    setIsClicked(
      isClicked.map((element, index) => {
        return index === idx ? !element : element
      })
    )
  }

  return (
    <>
      <Container>
        <CloseBtnWrap>
          <CloseBtn onClick={handleToInitialPage}>&times;</CloseBtn>
        </CloseBtnWrap>
        <LabelStyling>
          <div>
            {fileUrl.length === 0 ? (
              <ImageUploadWrap htmlFor="chooseFile">
                <ImageIcon className="fas fa-plus fa-7x"></ImageIcon>
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
              <FileNameWrap>
                File Name:
                {imgTitle.map((items, index) => (
                  <p key={index}>{items}</p>
                ))}
              </FileNameWrap>
            )}
          </div>
          <div>
            <DeleteSelectedPicBtn type="button" onClick={deleteFileImage}>
              UNSELECT
            </DeleteSelectedPicBtn>
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
            <Mood
              color={v}
              key={i}
              onClick={() => handleMoodColorSelect(i)}
              style={isClicked[i] ? { border: '3px solid orange' } : { border: 'none' }}
            ></Mood>
          ))}
        </MoodWrapper>
        <DescriptionAreaWrap>
          <DescriptionArea
            placeholder="오늘은 어떤 일이 있었나요? 또 어떤 기분이었나요?"
            value={body.content}
            onChange={e => {
              setBody({ content: e.target.value })
            }}
          />
        </DescriptionAreaWrap>
        <SubmitBtn
          accept="image/*"
          onClick={e => {
            onTest(e)
            handleToPostingMapPage(e)
          }}
        />
      </Container>
      <img src={ttt}></img>
      {/* <button onClick={onTest}>btn</button> */}
    </>
  )
}

export default ResponseTester
