import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import addPost from '../static/addPost.png'

const FirstContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow: scroll;
  background: rgb(248, 249, 250);
  scroll-behavior: smooth;
`
const WholeContainerOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, minmax(100px, auto));
  row-gap: 50px;
	column-gap: 50px;
  align-items: stretch;
  justify-items: stretch;
  align-content: space-around; 
  justify-content: space-around;
  padding: 120px;

  @media screen and (max-width: 820px) {
    padding: 150px 100px 200px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 100px;
  }
  @media screen and (max-width: 600px) {
    padding: 30px;
    row-gap: 30px;
    column-gap: 30px;
  }
`
const ContainerOne = styled.div`
  width:100%;
  height:100%;
  background: rgb(248, 249, 250);
`
const CardContainerOne = styled.div`
  color: white;
`
const CardOne = styled.div`
  width: 100%;
  height: 80%;
  min-height: 300px;
  text-align: center;
  background: #F4E12E;
  border-radius: 10px;
  box-shadow: rgba(244, 225, 46, 0.4) 5px 5px, rgba(244, 225, 46, 0.3) 10px 10px, rgba(244, 225, 46, 0.2) 15px 15px, rgba(244, 225, 46, 0.1) 20px 20px, rgba(244, 225, 46, 0.05) 25px 25px;
`
const CardContentOne = styled.div`
  width: 90%;
  height: 95%;
  background: #F4E12E;
  border-radius: 5px;
  padding: 60px 0px 0px 0px;
  transition: 0.3s all ease-in-out;
  margin: 0px 0px 0px 25px;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 820px) {
    padding: 35px 0px; 
  }
  @media screen and (max-width: 768px) {
    padding: 30px 20px 0px 0px; 
  }
`

const ContainerTwo = styled(ContainerOne)``
const CardContainerTwo = styled(CardContainerOne)``
const CardTwo = styled(CardOne)`
  background: #6ABF7D;
  box-shadow: rgba(106, 191, 125, 0.4) 5px 5px, rgba(106, 191, 125, 0.3) 10px 10px, rgba(106, 191, 125, 0.2) 15px 15px, rgba(106, 191, 125, 0.1) 20px 20px, rgba(106, 191, 125, 0.05) 25px 25px;
`
const CardContentTwo = styled(CardContentOne)`
  background: #6ABF7D;
  padding: 35px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    padding: 30px 20px 0px 0px; 
  }
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
  @media screen and (max-width: 768px) {
    padding: 30px 20px 0px 0px; 
  }

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
  @media screen and (max-width: 768px) {
    padding: 50px 20px 0px 0px; 
  }
`
const WholeContainerTwo = styled.div`
  display: flex;
  padding-bottom: 30px;
  background: #7E48B5;
  overflow: hidden;
`
const ContainerFive = styled(ContainerOne)`
`
const CardContainerFive = styled(CardContainerOne)`
  /* padding: 100px; */
  background: #7E48B5;

`
const CardFive = styled(CardOne)`
  background: #7E48B5;
  box-shadow: none;
  min-height: 150px;

`
const CardContentFive = styled(CardContentOne)`
  background: #7E48B5;
  padding: 40px 0px 0px 0px;
  @media screen and (max-width: 600px) {
    font-size: 29px;
  }
`

const LandingPage = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  })
  
  return (
    <FirstContainer>
      <WholeContainerOne>
        <ContainerOne data-aos="fade-right" data-aos-delay="0">
          <CardContainerOne>
            <CardOne>
              <CardContentOne>
                <p>오늘 하루 기분은 어땠나요?</p>
                <p>그럼 지난 달 둘째 주 수요일은요?</p>
              </CardContentOne>
            </CardOne>
          </CardContainerOne>
        </ContainerOne>

        <ContainerTwo  data-aos="fade-left" data-aos-delay="500">
          <CardContainerTwo>
            <CardTwo>
              <CardContentTwo>
                <p>기분을 색상으로</p>
                <p>지정할 수 있다면</p>
                <p>기억날지도 몰라요!</p>
              </CardContentTwo>
            </CardTwo>
          </CardContainerTwo>
        </ContainerTwo>

        <ContainerThree data-aos="fade-right" data-aos-delay="1000" data-aos-offset="-500">
          <CardContainerThree>
            <CardThree>
              <CardContentThree>
                <p>그 날의 감정을</p>
                <p>사진과 함께</p>
                <p>기록해 보세요</p>
              </CardContentThree>
            </CardThree>
          </CardContainerThree>
        </ContainerThree>

        <ContainerFour data-aos="fade-left" data-aos-delay="1500" data-aos-offset="-500">
          <CardContainerFour>
            <CardFour>
              <CardContentFour>
                <p>함께 시작해 볼까요?</p>
              </CardContentFour>
            </CardFour>
          </CardContainerFour>
        </ContainerFour>
      </WholeContainerOne>

      <WholeContainerTwo data-aos="flip-up" data-aos-delay="3000" data-aos-offset="-500">
        <ContainerFive>
          <CardContainerFive>
            <CardFive>
              <CardContentFive>
                <p>Memori It 과 함께 당신의 추억을 기록해보세요</p>
              </CardContentFive>
            </CardFive>
          </CardContainerFive>
        </ContainerFive>
      </WholeContainerTwo>
      </FirstContainer>
  )
}

export default LandingPage