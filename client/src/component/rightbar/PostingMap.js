import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPostMode } from '../../actions'
import styled from 'styled-components'
import GetKakaoMap from '../../servertest/get_kakaomap'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  align-items: center;
  text-align: center;
  background-color: white;

  h3 {
    color: lightgray;
    margin: 5px;
    :nth-child(2) {
      margin-bottom: 15px;
    }
  }
  h4 {
    color: lightgray;
    margin: 5px;
    :nth-child(2) {
      margin-bottom: 15px;
    }
  }
`
const GetKakaoMapWrap = styled.div`
  margin-top: 35px;
`
const PrevBtn = styled.button`
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
  :hover {
    background-color: #ffe54c;
  }
`
const PostBtn = styled(PrevBtn)``

const PostingMap = () => {
  const dispatch = useDispatch()
  const handleToPostingPage = () => {
    dispatch(createPostMode())
  }

  // const { id, mainImage, emotion, marker, content, lat, lng, allImage } = useSelector(
  //   state => state.rightbarReducer
  // )

  const userPostInfo = useSelector(state => state.rightbarReducer)
  console.log('이고왜 나나옴???', userPostInfo)

  // const handleToPostingPage = e => {
  //   e.preventDefault()

  //   // 넥스트를 눌렀을때는 state에 들어온정보만 기억해놓고 사진메타에이터 정보도 저장 엑시오스요청보내면 안됨 포스트요청보냈을때 보내야함

  //   const formData = new FormData()
  //   for (let i = 0; i < image.length; i++) {
  //     formData.append('postingImages', image[i])
  //     // userinfo.postingImages.push(image[i])
  //   }
  //   formData.append('data', JSON.stringify(body))
  //   userinfo.data = body
  //   axios
  //     .post('http://localhost:8081/posts', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       withCredentials: true,
  //     })
  //     .then(res => console.log(res))
  //     .catch(err => {
  //       console.error(err.message)
  //     })
  //   console.log(formData)
  //   dispatch(createPostMode())
  // }

  return (
    <Container>
      <GetKakaoMapWrap>
        <GetKakaoMap />
      </GetKakaoMapWrap>
      <div>
        <h3>기억에 남았던 곳이 있다면</h3>
        <h3>지도에 남겨보세요</h3>
      </div>
      <div>
        <h4>원하는 위치를 클릭해 마커를 추가하고</h4>
        <h4>마커를 클릭하여 제거합니다.</h4>
      </div>
      <div>
        <span>
          <PrevBtn onClick={handleToPostingPage}>PREV</PrevBtn>
        </span>
        <span>
          <PostBtn>POST</PostBtn>
        </span>
      </div>
    </Container>
  )
}

export default PostingMap
