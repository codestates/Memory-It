import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
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
const PostBtn = styled(PrevBtn)`
`

// const dispatch = useDispatch()
// const handleToInitialPage = () => {
//   dispatch(welcomeMode())
// }

const PostingMap = () => {
  return (
    <Container>
      <GetKakaoMap />
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
          <PrevBtn onClick={null}>PREV</PrevBtn>
        </span>
        <span>
          <PostBtn>POST</PostBtn>
        </span>
      </div>
    </Container>
  );
};

export default PostingMap;