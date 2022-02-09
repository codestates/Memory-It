import React from 'react'
import EXIF from 'exif-js'
import { createPostMode } from '../actions'

const LatLang = () => {
  function uploadImgPreview() {
    // 업로드 파일 읽기
    const fileInfo = document.getElementById('uploadFile').files[0]
    const reader = new FileReader()
    // readAsDataURL( )을 통해 파일을 읽어 들일때 onload가 실행
    reader.onload = function () {
      EXIF.getData(fileInfo, () => {
        const tags = EXIF.getAllTags(fileInfo)
        // 객체 내용 확인하기

        let exifLong = tags.GPSLongitude
        let exifLat = tags.GPSLatitude
        let exifLongRef = tags.GPSLongitudeRef
        let exifLatRef = tags.GPSLatitudeRef

        if (exifLatRef == 'S') {
          var latitude = exifLat[0] * -1 + (exifLat[1] * -60 + exifLat[2] * -1) / 3600
        } else {
          var latitude = exifLat[0] + (exifLat[1] * 60 + exifLat[2]) / 3600
        }

        if (exifLongRef == 'W') {
          var longitude = exifLong[0] * -1 + (exifLong[1] * -60 + exifLong[2] * -1) / 3600
        } else {
          var longitude = exifLong[0] + (exifLong[1] * 60 + exifLong[2]) / 3600
        }

        // console.log('latitude', latitude)
        // console.log('longitude', longitude)
      })
    }
    if (fileInfo) {
      reader.readAsDataURL(fileInfo)
    }
  }
  return (
    <div>
      <input type="file" id="uploadFile" onChange={uploadImgPreview} accept="image/*" />
      <br />
      <img id="thumbnailImg" src="" width="300" />
    </div>
  )
}

export default LatLang
