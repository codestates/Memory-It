import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import addPost from '../static/addPost.png'

const WholeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, minmax(100px, auto));
  background: ivory;
  row-gap: 50px;
	column-gap: 50px;
  align-items: stretch;
  justify-items: stretch;
  align-content: space-around; 
  justify-content: space-around;
  padding: 120px;
`
const ContainerOne = styled.div`
  width:100%;
  height:100%;
  background: ivory;
`
const CardContainerOne = styled.div`
  color: white;
`
const CardOne = styled.div`
  width: 100%;
  height: 80%;
  min-height: 290px;
  text-align: center;
  background: #F4E12E;
  border-radius: 10px;
  box-shadow: rgba(244, 225, 46, 0.4) 5px 5px, rgba(244, 225, 46, 0.3) 10px 10px, rgba(244, 225, 46, 0.2) 15px 15px, rgba(244, 225, 46, 0.1) 20px 20px, rgba(244, 225, 46, 0.05) 25px 25px;
`
const CardContentOne = styled.div`
  width: 90%;
  height: 95%;
  background: #F4E12E;
  /* margin: 100px auto; */
  border-radius: 5px;
  padding: 20px 0px 0px 0px;
  transition: 0.3s all ease-in-out;
  margin: 0px 0px 0px 25px;

`

const ContainerTwo = styled(ContainerOne)``
const CardContainerTwo = styled(CardContainerOne)``
const CardTwo = styled(CardOne)`
  background: #6ABF7D;
  box-shadow: rgba(106, 191, 125, 0.4) 5px 5px, rgba(106, 191, 125, 0.3) 10px 10px, rgba(106, 191, 125, 0.2) 15px 15px, rgba(106, 191, 125, 0.1) 20px 20px, rgba(106, 191, 125, 0.05) 25px 25px;
`
const CardContentTwo = styled(CardContentOne)`
  background: #6ABF7D;
  padding: 70px 0px 0px 0px;

`

const ContainerThree = styled(ContainerOne)``
const CardContainerThree = styled(CardContainerOne)``
const CardThree = styled(CardOne)`
  background: #D12C2C;
  box-shadow: rgba(209, 44, 44, 0.4) 5px 5px, rgba(209, 44, 44, 0.3) 10px 10px, rgba(209, 44, 44, 0.2) 15px 15px, rgba(209, 44, 44, 0.1) 20px 20px, rgba(209, 44, 44, 0.05) 25px 25px;
`
const CardContentThree = styled(CardContentOne)`
  background: #D12C2C;
  padding: 40px 0px 0px 0px;

`

const ContainerFour = styled(ContainerOne)``
const CardContainerFour = styled(CardContainerOne)``
const CardFour = styled(CardOne)`
  background: #337BBD;
  box-shadow: rgba(51, 123, 189, 0.4) 5px 5px, rgba(51, 123, 189, 0.3) 10px 10px, rgba(51, 123, 189, 0.2) 15px 15px, rgba(51, 123, 189, 0.1) 20px 20px, rgba(51, 123, 189, 0.05) 25px 25px;
`
const CardContentFour = styled(CardContentOne)`
  background: #337BBD;
  padding: 60px 0px 0px 0px;

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
      duration : 2000
    });
  });
  
  return (
    <>
    <WholeContainer>
      <ContainerOne data-aos="fade-right" data-aos-delay="0">
        <CardContainerOne>
          <CardOne>
            <CardContentOne>
              <h2>Memori It 시작하기</h2>
              <p>오늘 하루 기분은 어땠나요?</p>
              <p>궁금해지네요</p>
              <p>그럼 지난 달 둘째 주 수요일은요?</p>
              <p>기분을 색상으로 지정할 수 있다면 기억날지도 몰라요!</p>
              <p>함께 시작해볼까요?</p>
            </CardContentOne>
          </CardOne>
        </CardContainerOne>
      </ContainerOne>

      <ContainerTwo  data-aos="fade-left" data-aos-delay="1000">
        <CardContainerTwo>
          <CardTwo>
            <CardContentTwo>
            <h2><img id='addPost' height="25px" src={addPost} /> &nbsp;를 눌러 시작할 수 있어요</h2>
              <p>사진 찍은 추억이 담긴 장소를 지도에 표시해 보세요</p>
              <p>간단한 글과 함께 올려도 좋아요</p>
            </CardContentTwo>
          </CardTwo>
        </CardContainerTwo>
      </ContainerTwo>

      <ContainerThree data-aos="fade-right" data-aos-delay="2000">
        <CardContainerThree>
          <CardThree>
            <CardContentThree>
              <h2>게시물 위에</h2>
              <p>마우스 커서를 올려보세요</p>
              <p>작성한 날짜</p>
              <p>그리고</p>
              <p>그 날의 감정이 보일 거예요</p>
            </CardContentThree>
          </CardThree>
        </CardContainerThree>
      </ContainerThree>

      <ContainerFour data-aos="fade-left" data-aos-delay="3000">
        <CardContainerFour>
          <CardFour>
            <CardContentFour>
              <h2>게시물을 클릭 해 보세요</h2>
              <p>기록했던 내용과</p>
              <p>그 날 갔던 곳을</p>
              <p>볼 수 있을 거예요</p>
            </CardContentFour>
          </CardFour>
        </CardContainerFour>
      </ContainerFour>
    </WholeContainer>

      {/* <ContainerFive>
        <CardContainerFive data-aos="fade-down">
          <CardFive data-aos="fade-down">
            <CardContentFive data-aos="fade-down">
              <h1 data-aos="fade-down">Memori It 과 함께 당신의 추억을 기록해보세요</h1>
            </CardContentFive>
          </CardFive>
        </CardContainerFive>
      </ContainerFive> */}
      </>
  );
};

export default LandingPage;