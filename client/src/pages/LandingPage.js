import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const colors = ['#F4E12E', '#6ABF7D', '#D12C2C', '#337BBD', '#7E48B5']

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ContainerOne = styled.div`
  /* position:absolute; */
  width:150vh;
  height:50vh;
  background: ivory;
  /* display: block; */
  /* text-align:center;
  position: absolute; */
  /* top: 5%;
  left: 15%; */
  /* -webkit-transform: translate(-50%, -50%); */
`
const CardContainerOne = styled.div`
  display: inline-block;
  width:100%;
  height:100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  color: black;
`
const CardOne = styled.div`
  width: 60%;
  height: 80%;
  max-height: 300px;
  padding: auto;
  text-align: center;
  background: #F4E12E;
  border-radius: 10px;
  box-shadow: rgba(244, 225, 46, 0.4) 5px 5px, rgba(244, 225, 46, 0.3) 10px 10px, rgba(244, 225, 46, 0.2) 15px 15px, rgba(244, 225, 46, 0.1) 20px 20px, rgba(244, 225, 46, 0.05) 25px 25px;
`
const CardContentOne = styled.div`
  width: 90%;
  height: 95%;
  background: #F4E12E;
  margin: 10px auto;
  border-radius: 5px;
  padding: 20px;
  /* box-shadow:  16px 16px 44px #0a0a0a, 
              -16px -16px 44px #282a28; */
  transition: 0.3s all ease-in-out;
`

const ContainerTwo = styled(ContainerOne)``
const CardContainerTwo = styled(CardContainerOne)``
const CardTwo = styled(CardOne)`
  background: #6ABF7D;
  box-shadow: rgba(106, 191, 125, 0.4) 5px 5px, rgba(106, 191, 125, 0.3) 10px 10px, rgba(106, 191, 125, 0.2) 15px 15px, rgba(106, 191, 125, 0.1) 20px 20px, rgba(106, 191, 125, 0.05) 25px 25px;
`
const CardContentTwo = styled(CardContentOne)`
  background: #6ABF7D;
`

const ContainerThree = styled(ContainerOne)``
const CardContainerThree = styled(CardContainerOne)``
const CardThree = styled(CardOne)`
  background: #D12C2C;
  box-shadow: rgba(209, 44, 44, 0.4) 5px 5px, rgba(209, 44, 44, 0.3) 10px 10px, rgba(209, 44, 44, 0.2) 15px 15px, rgba(209, 44, 44, 0.1) 20px 20px, rgba(209, 44, 44, 0.05) 25px 25px;
`
const CardContentThree = styled(CardContentOne)`
  background: #D12C2C;
`

const ContainerFour = styled(ContainerOne)``
const CardContainerFour = styled(CardContainerOne)``
const CardFour = styled(CardOne)`
  background: #337BBD;
  box-shadow: rgba(51, 123, 189, 0.4) 5px 5px, rgba(51, 123, 189, 0.3) 10px 10px, rgba(51, 123, 189, 0.2) 15px 15px, rgba(51, 123, 189, 0.1) 20px 20px, rgba(51, 123, 189, 0.05) 25px 25px;
`
const CardContentFour = styled(CardContentOne)`
  background: #337BBD;
`

const ContainerFive = styled(ContainerOne)``
const CardContainerFive = styled(CardContainerOne)``
const CardFive = styled(CardOne)`
  background: #7E48B5;
  box-shadow: rgba(126, 72, 181, 0.4) 5px 5px, rgba(126, 72, 181, 0.3) 10px 10px, rgba(126, 72, 181, 0.2) 15px 15px, rgba(126, 72, 181, 0.1) 20px 20px, rgba(126, 72, 181, 0.05) 25px 25px;
`
const CardContentFive = styled(CardContentOne)`
  background: #7E48B5;
`

const LandingPage = () => {

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
  });
  
  return (
    <WholeContainer>
      <ContainerOne>
        <CardContainerOne data-aos="fade-down">
          <CardOne data-aos="fade-down">
            <CardContentOne data-aos="fade-down">
              <h2 data-aos="fade-down">Memori It 시작하기</h2>
              <p data-aos="fade-down">오늘 하루 기분은 어땠나요?</p>
              <p data-aos="fade-down">궁금해지네요</p>
              <p data-aos="fade-down">그럼 지난 달 둘째 주 수요일은요?</p>
              <p data-aos="fade-down">기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p data-aos="fade-down">함께 시작해볼까요?</p>
            </CardContentOne>
          </CardOne>
        </CardContainerOne>
      </ContainerOne>

      <ContainerTwo>
        <CardContainerTwo data-aos="fade-down">
          <CardTwo data-aos="fade-down">
            <CardContentTwo data-aos="fade-down">
              <h2 data-aos="fade-down">Memori It 시작하기</h2>
              <p data-aos="fade-down">오늘 하루 기분은 어땠나요?</p>
              <p data-aos="fade-down">궁금해지네요</p>
              <p data-aos="fade-down">그럼 지난 달 둘째 주 수요일은요?</p>
              <p data-aos="fade-down">기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p data-aos="fade-down">함께 시작해볼까요?</p>
            </CardContentTwo>
          </CardTwo>
        </CardContainerTwo>
      </ContainerTwo>

      <ContainerThree>
        <CardContainerThree data-aos="fade-down">
          <CardThree data-aos="fade-down">
            <CardContentThree data-aos="fade-down">
              <h2 data-aos="fade-down">Memori It 시작하기</h2>
              <p data-aos="fade-down">오늘 하루 기분은 어땠나요?</p>
              <p data-aos="fade-down">궁금해지네요</p>
              <p data-aos="fade-down">그럼 지난 달 둘째 주 수요일은요?</p>
              <p data-aos="fade-down">기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p data-aos="fade-down">함께 시작해볼까요?</p>
            </CardContentThree>
          </CardThree>
        </CardContainerThree>
      </ContainerThree>

      <ContainerFour>
        <CardContainerFour data-aos="fade-down">
          <CardFour data-aos="fade-down">
            <CardContentFour data-aos="fade-down">
              <h2 data-aos="fade-down">Memori It 시작하기</h2>
              <p data-aos="fade-down">오늘 하루 기분은 어땠나요?</p>
              <p data-aos="fade-down">궁금해지네요</p>
              <p data-aos="fade-down">그럼 지난 달 둘째 주 수요일은요?</p>
              <p data-aos="fade-down">기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p data-aos="fade-down">함께 시작해볼까요?</p>
            </CardContentFour>
          </CardFour>
        </CardContainerFour>
      </ContainerFour>

      <ContainerFive>
        <CardContainerFive data-aos="fade-down">
          <CardFive data-aos="fade-down">
            <CardContentFive data-aos="fade-down">
              <h2 data-aos="fade-down">Memori It 시작하기</h2>
              <p data-aos="fade-down">오늘 하루 기분은 어땠나요?</p>
              <p data-aos="fade-down">궁금해지네요</p>
              <p data-aos="fade-down">그럼 지난 달 둘째 주 수요일은요?</p>
              <p data-aos="fade-down">기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p data-aos="fade-down">함께 시작해볼까요?</p>
            </CardContentFive>
          </CardFive>
        </CardContainerFive>
      </ContainerFive>
      {/* <BoxTwo  data-aos="">
        <p data-aos="">를 눌러 시작할 수 있습니다.</p>
        <p data-aos="">사진을 찍은 곳을 지도에 표시해 보세요</p>
        <p data-aos="">간단한 글과 함께 올려도 좋아요</p>
        </BoxTwo>
        <BoxThree data-aos="">
        <p data-aos="">게시물 위에 마우스 커서를 올려보세요!</p>
        <p data-aos="">작성한 날짜</p>
        <p data-aos="">그리고</p>
        <p data-aos="">그 날의 감정이 보일 거예요</p>
        </BoxThree>
        <BoxFour data-aos="">
        <p data-aos="">게시물을 클릭해 보세요!</p>
        <p data-aos="">기록했던 내용과</p>
        <p data-aos="">그 날 갔던 곳을</p>
        <p data-aos="">볼 수 있을 거예요</p>
        </BoxFour>
        <BoxFive data-aos="">
        <p data-aos=""></p>
      </BoxFive> */}
    </WholeContainer>
  );
};

export default LandingPage;