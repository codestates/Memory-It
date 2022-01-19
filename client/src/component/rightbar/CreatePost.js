import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import EXIF from 'exif-js'
import { postingmapMode } from '../../actions'
import { DetailPost, DetailPostBackdrop } from './DetailedPost'
import { MdSettings } from 'react-icons/md'

const colors = ['#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

export const CreatingWrapper = styled(DetailPost)`
  @media only screen and (max-width: 1180px) {
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
    padding-bottom: min(600px, 150%);
    transform: translateY(-5%);
  }
  padding-bottom: 150%;
  background-color: white;
`

const LabelStyling = styled.div`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 2px dashed #ff9900;
  border-radius: 20px;
  height: 32%;
  width: 80%;

  overflow: scroll;
  .inner-uploader {
    transition: 0.25s;
  }
  &:hover {
    .inner-uploader {
      color: #ff9900;
    }
  }
`

const ImageUploadWrap = styled.label`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  h3 {
    color: lightgray;
  }
  i {
    color: lightgray;
  }
`

const ImageIcon = styled.i`
  margin-top: 1rem;
`

const ImageFileWrap = styled.div`
  padding: 1rem;
  overflow: scroll;
  height: 100%;
`
const Img = styled.img`
  border-radius: 10px;
  width: 30.5%;
  height: 90px;
  margin: 2px 4px 0 4px;
`

const FileNameWrap = styled.div`
  background-color: white;
  position: absolute;
  top: 36%;
  left: 10%;

  height: 70px;
  width: 180px;
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: scroll;
  padding: 5px;

  p {
    font-size: 11px;
    margin: 2px;
  }
`

const FileUpload = styled.div`
  position: absolute;
  top: 36.2%;
  left: 60%;
  width: 50px;
`

const MoodWrapper = styled.div`
  position: absolute;
  top: 53%;

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
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

const HiddenFileUploadBtn = styled.input`
  display: none;
`

const DescriptionAreaWrap = styled.div`
  position: absolute;
  top: 63%;
  width: 80%;
`
const DescriptionArea = styled.textarea.attrs({
  maxLength: '180',
})`
  width: 100%;
  height: 155px;
  resize: none;
  font-size: 13px;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 10px;
  line-height: 2em;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 30px;
  -webkit-transition: height 2s ease;
  -moz-transition: height 2s ease;
  -ms-transition: height 2s ease;
  -o-transition: height 2s ease;
  transition: height 2s ease;
  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`
const DeleteSelectedPicBtn = styled.button`
  width: 100px;
  height: 40px;
  outline: 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0;
  margin: 0px 13px 0px 0px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 375px) {
    margin: 10px 20px 15px 0px;
  }
`

export const NextButton = styled.div`
  position: absolute;
  bottom: 2%;
  width: 80px;
  height: 35px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  letter-spacing: 1px;
  outline: none;
  border: 1px solid #ff9900;
  background-color: white;
  border-radius: 5px;
  z-index: 0;
  cursor: pointer;

  font-weight: bold;
  :hover {
    background-color: #ff9900;
    color: white;
  }

  p {
    position: absolute;
    z-index: 30;
  }

  &.preparing {
    pointer-events: none;
    cursor: default;

    p {
      display: none;
      color: white;
    }

    .spinner {
      position: absolute;
      z-index: 31;
      display: block;
      color: gray;
      width: 24px;
      height: 24px;
      @keyframes spinner {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      }
      animation: spinner 3s linear infinite;
    }
  }

  .spinner {
    position: absolute;
    display: none;
  }
`

const WarningMassage = styled.div`
  position: absolute;
  /* z-index: 100; */
  display: none;
  bottom: 8.1%;
  right: 10.5%;
  color: tomato;
  font-size: 0.7rem;
  animation: waringmsg 0.1s;
  @keyframes waringmsg {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`

const MapLoader = styled.div`
  display: absolute;
  z-index: 29;
  width: 120%;
  height: 100%;
  transform: translateX(-100%);
  background-color: #ff9900;

  &.prepare {
    animation: maploader 6.5s linear;
    animation-fill-mode: forwards;
    @keyframes maploader {
      0% {
        transform: translateX(-100%);
      }
      18% {
        transform: translateX(-80%);
      }
      30% {
        transform: translateX(-75%);
      }
      50% {
        transform: translateX(-50%);
      }
      70% {
        transform: translateX(-30%);
      }
      90% {
        transform: translateX(-14%);
      }
      100% {
        transform: translateX(-4%);
      }
    }
  }
  &.done {
    transform: translateX(-0%);
  }
`

const CreatePost = () => {
  const [fileUrl, setFileUrl] = useState([])
  const [imgTitle, setImgTitle] = useState([])
  const [emotions, setEmotions] = useState([])
  const [currentLoca, setCurrentLoca] = useState({
    lat: '',
    lng: '',
  })

  const [body, setBody] = useState({
    content: '',
  })

  // const [postingText, setPostingText] = useState('Next')
  const [isClicked, setIsClicked] = useState(Array(colors.length).fill(false))
  const [isImgExist, setIsImgExist] = useState(false)
  const [warning, setWarning] = useState('')

  const alertBox = useRef()
  const img = useRef()
  const warnRef = useRef(null)
  const loaderRef = useRef(null)

  const markerList = [
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390179094558/2022-01-07_11.32.39.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390443319416/2022-01-07_11.32.51.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022389981958164/2022-01-07_11.32.30.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390900518952/2022-01-07_11.33.04.png',
    'https://cdn.discordapp.com/attachments/929022343689420871/929022390674010112/2022-01-07_11.32.58.png',
  ]

  const images = []

  const buttonAnimationStart = () => {
    loaderRef.current.classList.remove('done')
    loaderRef.current.classList.add('prepare')
    alertBox.current.classList.add('preparing')
  }
  const buttonAnimationEnd = () => {
    loaderRef.current.classList.add('done')
    loaderRef.current.classList.remove('prepare')
    alertBox.current.classList.remove('preparing')
  }

  const processImage = event => {
    const imageFile = event.target.files
    const fileName = imageFile.name
    const files = []
    const filesNames = []

    warnRef.current.style.display = 'none'
    buttonAnimationStart()

    for (let i = 0; i < imageFile.length; i++) {
      const imageUrl = URL.createObjectURL(imageFile[i])
      const imageName = imageFile[i].name

      files.push(imageUrl)
      filesNames.push(imageName)
    }

    setFileUrl(files)
    setImgTitle(filesNames)
    setIsImgExist(true)

    const fileInfo = document.getElementById('chooseFile').files[0]
    const reader = new FileReader()
    reader.onload = function () {
      EXIF.getData(fileInfo, () => {
        const tags = EXIF.getAllTags(fileInfo)

        let exifLong = tags.GPSLongitude
        let exifLat = tags.GPSLatitude
        let exifLongRef = tags.GPSLongitudeRef
        let exifLatRef = tags.GPSLatitudeRef

        if (!exifLong || !exifLat || !exifLongRef || !exifLatRef) {
          navigator.geolocation.getCurrentPosition(position => {
            setCurrentLoca({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
            buttonAnimationEnd()
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
    setIsImgExist(false)
  }

  const dispatch = useDispatch()

  const handleAddEmotions = i => {
    warnRef.current.style.display = 'none'

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
    const image = img.current.files
    for (let i = 0; i < image.length; i++) {
      images.push(image[i])
    }

    if (body.emotion && isImgExist) {
      const definedMarker = markerList[body.emotion[0] - 1]
      dispatch(postingmapMode({ ...body, ...currentLoca, marker: definedMarker }, images))
    } else {
      warnRef.current.style.display = 'block'
      setWarning('사진과 감정 모두 선택해주세요!')
    }
  }

  return (
    <DetailPostBackdrop>
      <CreatingWrapper>
        <LabelStyling>
          {fileUrl.length === 0 ? (
            <ImageUploadWrap htmlFor="chooseFile">
              <ImageIcon className="fas fa-plus fa-4x inner-uploader"></ImageIcon>
              <h3 className="inner-uploader">클릭하여 사진 업로드</h3>
            </ImageUploadWrap>
          ) : (
            <ImageFileWrap>
              {fileUrl.map((items, index) => (
                <Img key={index} src={items} />
              ))}
            </ImageFileWrap>
          )}
        </LabelStyling>
        <FileNameWrap>
          파일 이름:
          {imgTitle.map((items, index) => (
            <p key={index}>{items}</p>
          ))}
        </FileNameWrap>
        <FileUpload>
          <DeleteSelectedPicBtn type="button" onClick={deleteFileImage}>
            UN SELECT
          </DeleteSelectedPicBtn>
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
              style={
                isClicked[i]
                  ? {
                      opacity: 1,
                      transform: 'translate(0, -3px)',
                      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.22)',
                    }
                  : null
              }
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

        <NextButton ref={alertBox} onClick={handleToPostingMapPage}>
          <MdSettings className="spinner"></MdSettings>
          <p>다음</p>
          <MapLoader ref={loaderRef}></MapLoader>
        </NextButton>
        <WarningMassage ref={warnRef}>사진과 감정 모두 선택해주세요!</WarningMassage>
      </CreatingWrapper>
    </DetailPostBackdrop>
  )
}

export default CreatePost
