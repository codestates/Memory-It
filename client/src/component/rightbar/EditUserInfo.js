import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  font-size: 20px;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  h2 {
    margin: 30px;
  }
  h3 {
    color: lightgray;
    margin-bottom: 30px;
  }
  p {
    margin: 30px;
  }
  @media screen and (max-width: 320px) {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  } 
`
const InputBox = styled.input`
  padding: 10px;
  margin: 15px;
  width: 70%;
  @media screen and (max-width: 320px) {
    margin: 10px;
  } 
`
const EditBtn = styled.button`
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border: 5px solid #ffff66; 
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 30px 0px 0px 0px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: #ffff66;
    z-index: -1;
    transition: 0.2s ease;
    }
  &:hover {
    color: black;
    background: #ffff66;
    transition: 0.2s ease;
    &:before {
      width: 100%;
    }
  }
  @media screen and (max-width: 320px) {
    margin-top: 10px;
  } 
`

const EditUserInfo = () => {
  return (
    <Container>
      <h2>Memory It의 로고를 자세히 보면</h2>
      <h3>어떤 영화가 떠오르지 않으시나요?</h3>
      <p>EDIT YOUR PROFILE</p>
      <div>
        <InputBox type='text' placeholder='이름' />
      </div>
      <div>
        <InputBox type='password' placeholder='비밀번호 변경' />
      </div>
      <div>
        <InputBox type='password' placeholder='비밀번호 변경 확인' />
      </div>
      <EditBtn>EDIT</EditBtn>
    </Container>
  );
};

export default EditUserInfo;