import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import EXIF from 'exif-js'
import { welcomeMode, postingmapMode, detailedPostMode } from '../../actions'

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
    width: 100%;
    height: 100%;
    padding: 0px 20px 0px 20px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    padding: 50px;
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
  @media screen and (max-width: 375px) {
    padding: 15px;
  }
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
  // value: 'NEXT',
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
  padding: 0px 0px 10px 10px;
  background-color: rgb(249, 250, 252);
  text-align: left;
  margin-top: 0px;
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

const CreatePost = () => {
  const [fileUrl, setFileUrl] = useState([])
  const [imgTitle, setImgTitle] = useState([])
  const [isLogined, setIsLogined] = useState(false)
  const [emotions, setEmotions] = useState([])
  const [isClicked, setIsClicked] = useState(Array(colors.length).fill(false))
  const [ttt, setTTT] = useState('')

  const [body, setBody] = useState({
    content: '',
    emotion: [],
    lat: '',
    lng: '',
    images: [],
  })

  const [postingText, setPostingText] = useState('Next')
  const alertBox = useRef()

  useEffect(() => {
    setPostingText('Next')
    alertBox.current.classList.remove('alert')
  }, [body])

  const markerList = [
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390179094558/2022-01-07_11.32.39.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390443319416/2022-01-07_11.32.51.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022389981958164/2022-01-07_11.32.30.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390900518952/2022-01-07_11.33.04.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390674010112/2022-01-07_11.32.58.png',
  ]

  const img = useRef()

  const userinfo = { postingImages: [], data: {} }
  const images = []

  const processImage = event => {
    const imageFile = event.target.files
    const fileName = imageFile.name
    const files = []
    const filesNames = []

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      const imageName = imageFile[i].name

      files.push(imageUrl)
      filesNames.push(imageName)
    }

    setFileUrl(files)
    setImgTitle(filesNames)

    // 업로드 파일 읽기
    const fileInfo = document.getElementById('chooseFile').files[0]
    // console.log(fileInfo)
    const reader = new FileReader()
    // readAsDataURL( )을 통해 파일을 읽어 들일때 onload가 실행
    reader.onload = function () {
      EXIF.getData(fileInfo, () => {
        const tags = EXIF.getAllTags(fileInfo)
        // 객체 내용 확인하기
        // console.log('tags', tags)

        let exifLong = tags.GPSLongitude
        let exifLat = tags.GPSLatitude
        let exifLongRef = tags.GPSLongitudeRef
        let exifLatRef = tags.GPSLatitudeRef
        if (!exifLong || !exifLat || !exifLongRef || !exifLatRef) {
          navigator.geolocation.getCurrentPosition(position => {
            setBody({
              ...body,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          })
        } else {
          if (exifLatRef == 'S') {
            var latitude = exifLat[0] * -1 + (exifLat[1] * -60 + exifLat[2] * -1) / 3600
          } else {
            var latitude = exifLat[0] + (exifLat[1] * 60 + exifLat[2]) / 3600
          }

          if (exifLongRef == 'W') {
            var longitude =
              exifLong[0] * -1 + (exifLong[1] * -60 + exifLong[2] * -1) / 3600
          } else {
            var longitude = exifLong[0] + (exifLong[1] * 60 + exifLong[2]) / 3600
          }

          setBody({
            ...body,
            lat: latitude,
            lng: longitude,
          })
        }
      })
    }
    if (fileInfo) {
      reader.readAsDataURL(fileInfo)
    }
  }

  const deleteFileImage = () => {
    setFileUrl([])
    setImgTitle([])
  }

  const dispatch = useDispatch()
  const handleToInitialPage = () => {
    dispatch(welcomeMode())
  }

  const handleAddEmotions = i => {
    const isClickedArr = isClicked.slice()
    isClickedArr[i] = true
    setIsClicked(isClickedArr)
    const selectedEmo = emotions.slice()
    selectedEmo.push(i + 1)
    setEmotions(selectedEmo)
    setBody({ ...body, emotion: selectedEmo })
  }

  const handleRemoveEmotions = i => {
    const isClickedArr = isClicked.slice()
    isClickedArr[i] = false
    setIsClicked(isClickedArr)
    const selectedEmo = emotions.slice()
    const indexNumber = selectedEmo.indexOf(i + 1)
    selectedEmo.splice(indexNumber, 1)
    setEmotions(selectedEmo)
    setBody({ ...body, emotion: selectedEmo })
  }

  const handleMoodColorSelect = idx => {
    const arr001 = isClicked.slice()
    arr001[idx] === false ? handleAddEmotions(idx) : handleRemoveEmotions(idx)
  }

  const handleToPostingMapPage = () => {
    const definedMarker = markerList[body.emotion[0] - 1]
    dispatch(postingmapMode({ ...body, marker: definedMarker }, images))
  }

  return (
    <>
      {/* <MobileContainerBackground> */}
        <Container>
          <CloseBtnWrap>
            <CloseBtn onClick={handleToInitialPage}>&times;</CloseBtn>
          </CloseBtnWrap>
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
                onClick={() => {
                  handleMoodColorSelect(i)
                }}
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
              style={isClicked[i] ? { border: '3px solid orange' } : { border: 'none' }}
            ></Mood>
          ))}
        </MoodWrapper>
        <DescriptionAreaWrap>
          <DescriptionArea
            placeholder="오늘은 어떤 일이 있었나요? 또 어떤 기분이었나요?"
            value={body.content}
            onChange={e => {
              setBody({ ...body, content: e.target.value })
            }}
          />
        </DescriptionAreaWrap>

        <SubmitBtn
          accept="image/*"
          ref={alertBox}
          value={postingText}
          onClick={e => {
            const image = img.current.files
            for (let i = 0; i < image.length; i++) {
              images.push(image[i])
            }
            images.length === 0
              ? setPostingText('최소한 하나의 사진이 필요합니다')
              : body.emotion.length === 0
              ? setPostingText('최소한 하나의 감정이 필요합니다')
              : handleToPostingMapPage(e)
          }}
        />
      </Container>
      <img src={ttt}></img>
      {/* <button onClick={onTest}>btn</button> */}
    </>
  )
}

export default CreatePost
