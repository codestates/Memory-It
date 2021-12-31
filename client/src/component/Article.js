import React from 'react'
import styled from 'styled-components'

const Picture = styled.img`
  transform: translate(-50%, -50%);
  max-width: 100%;
  border: 35px solid;
  border-radius: 20px;
  border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
  border-image-slice: 1;
  margin: 10px;
`

const ThumbnailWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
`

const ThumbnailCentered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
`

function Article () {
  return (
    <article>
      <ThumbnailWrapper>
        <Thumbnail>
          <ThumbnailCentered>
            <Picture src='https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/091/693/81091693_1533539947065_1_600x600.JPG' />
          </ThumbnailCentered>
        </Thumbnail>
      </ThumbnailWrapper>
    </article>
  )
}
export default Article