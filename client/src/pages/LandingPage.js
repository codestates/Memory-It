import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled, { keyframes } from 'styled-components'
import addPost from '../static/addPost.png'

const FirstContainer = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgb(248, 249, 250);
  scroll-behavior: smooth;
`
const WholeContainerOne = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  row-gap: 8%;
  padding: 2% 5%;
  max-width: 100vw;
  width: 100%;
  height: 80%;
  overflow: scroll;
  /* overflow: visible; */
`
const ContainerOne = styled.div`
  position: relative;
  overflow: hidden;

  width: max(70%, 200px);
  height: 0;
  padding-bottom: max(35%, 32vh);

  background: #f4e12e;
  border-radius: 10px;
  box-shadow: rgba(244, 225, 46, 0.4) 5px 5px, rgba(244, 225, 46, 0.3) 10px 10px,
    rgba(244, 225, 46, 0.2) 15px 15px, rgba(244, 225, 46, 0.1) 20px 20px,
    rgba(244, 225, 46, 0.05) 25px 25px;
`
const CardContainerOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: max(2.1vw, 0.9rem);

  p {
    margin: 5px;
  }
`

const ContainerTwo = styled(ContainerOne)`
  background: #6abf7d;
  box-shadow: rgba(106, 191, 125, 0.4) 5px 5px, rgba(106, 191, 125, 0.3) 10px 10px,
    rgba(106, 191, 125, 0.2) 15px 15px, rgba(106, 191, 125, 0.1) 20px 20px,
    rgba(106, 191, 125, 0.05) 25px 25px;
`

const ContainerThree = styled(ContainerOne)`
  background: #d12c2c;
  box-shadow: rgba(209, 44, 44, 0.4) 5px 5px, rgba(209, 44, 44, 0.3) 10px 10px,
    rgba(209, 44, 44, 0.2) 15px 15px, rgba(209, 44, 44, 0.1) 20px 20px,
    rgba(209, 44, 44, 0.05) 25px 25px;
`

const ContainerFour = styled(ContainerOne)`
  background: #337bbd;
  box-shadow: rgba(51, 123, 189, 0.4) 5px 5px, rgba(51, 123, 189, 0.3) 10px 10px,
    rgba(51, 123, 189, 0.2) 15px 15px, rgba(51, 123, 189, 0.1) 20px 20px,
    rgba(51, 123, 189, 0.05) 25px 25px;
`

const WholeContainerTwo = styled.div`
  position: absolute;
  background: #7e48b5;
  bottom: 0;

  display: flex;
  width: 100%;
  height: 20%;

  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 700;
  font-size: max(3vw, 1.3rem);
`

// const Containeritem = styled.div`
//   /* perspective: 300px; */
//   /* text-align: center; */
// `

const Item = styled.div`
  backface-visibility: hidden;
  transition: 1s;
`

const hoverAnimation = keyframes`
0%{
  transform: : translateY(0%);
  opacity: 1;
}
50%{
  transform: translateY(-100%);
  opacity: 0;
}
100%{
  transform: translateY(-200%);
  opacity: : 0;;
}
`

const Front = styled.div`
  position: absolute;
  text-align: center;
  /* left: 550px; */
  /* width: 100%;
  height: 80%;
  min-height: 290px; */
  backface-visibility: hidden;
  transition: 3s;
  transform: rotateY(0deg);
`

const Back = styled.div`
  position: absolute;
  /* left: 550px; */
  /* width: 100%;
  height: 70%;
  min-height: 290px; */
  backface-visibility: hidden;
  transition: 3s;
  transform: rotateY(-180deg);
`

const BackImage = styled.img`
  max-width: 300px;
`

const SlideInChangeShape = keyframes`

  0% {
    margin-left: 100%;
    transform: scale(1,1)      translateY(0);
  
  }
  5% {
    margin-left: 95%;
  
    transform: scale(1.1,.9)   translateY(0);
  
  }
  10% {
    margin-left: 90%;
 
    transform: scale(.9,1.1)   translateY(-40px);
  
  }
  15% {
    margin-left: 85%;
  
    transform: scale(1.05,.95) translateY(0);
  
  }
  20% {
    margin-left: 80%;
  
    transform: scale(1,1)      translateY(-7px);
  
  }
  25% {
    margin-left: 75%;
 
    transform: scale(1,1)      translateY(0);
  
  }
  30% {
    margin-left: 70%;
   
    transform: scale(1,1)      translateY(0); 
  
  }
  35% {
    margin-left: 65%;
  
    transform: scale(1.1,.9)   translateY(0);
  
  }
  40% {
    margin-left: 60%;
 
    transform: scale(.9,1.1)   translateY(-50px);
  
  }
  45% {
    margin-left: 55%;
  
    transform: scale(1.05,.95) translateY(0);
  
  }
  50% {
    margin-left: 50%;
  
    transform: scale(1,1)      translateY(-7px);
  
  }
  55% {
    margin-left: 45%;
 
    transform: scale(1,1)      translateY(0);
  
  }
  60% {
    margin-left: 40%;
   
    transform: scale(1,1)      translateY(0); 
  
  }
  65% {
    margin-left: 35%;
  
    transform: scale(1.1,.9)   translateY(0);
  
  }
  70% {
    margin-left: 30%;
 
    transform: scale(.9,1.1)   translateY(-50px);
  
  }
  78% {
    margin-left: 22%;
  
    transform: scale(1.05,.95) translateY(0);
  
  }
  86% {
    margin-left: 14%;
  
    transform: scale(1,1)      translateY(-7px);
  
  }
  92% {
    margin-left: 8%;
 
    transform: scale(1,1)      translateY(0);
  
  }
  100% {
    margin-left: 0%;
   
    transform: scale(1,1)      translateY(0); 
  
  }

`

const FadeInL = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`

const StartButton = styled.button`
  background-color: #ff9900;
  border: none;
  outline: none;
  color: white;
  width: 30%;
  height: 15%;
  min-height: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  /* top: 70px; */
  top: 20%;
  font-size: max(1.4vw, 0.7rem);
  border-radius: 3%;
  transform: translateY(0);
  cursor: pointer;
  /* animation: 3s ease-in 1s infinite reverse both running slidein; */
  animation: ${SlideInChangeShape} 5s linear;
  transition: 0.5s;
  &:hover {
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.4);
    transform: translateY(-10%);
  }
`

const AnimatedContainerFour = styled.div`
  animation: ${FadeInL} 6s;
`

const LogoAnimation = styled.img`
  max-width: 100px;
  position: absolute;
  left: 4vw;
  animation: ${FadeInL} 2s;
  @media only screen and (max-width: 670px) {
    display: none;
  }
`

const redirectUrl = () => {
  window.location.replace(`http://localhost:3000/signup`)
}

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  })

  return (
    <FirstContainer>
      <WholeContainerOne>
        <ContainerOne data-aos="fade-right" data-aos-delay="0">
          <CardContainerOne>
            {/* <Containeritem> */}
            {/* <Item> */}
            <Front>
              <p>오늘 하루 기분은 어땠나요?</p>
              <p>그럼 지난 달 둘째 주 수요일은요?</p>
            </Front>
            <Back>
              <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Back>
            {/* </Item> */}
            {/* </Containeritem> */}
          </CardContainerOne>
        </ContainerOne>

        <ContainerTwo data-aos="fade-left" data-aos-delay="500">
          <CardContainerOne>
            {/* <Containeritem> */}
            {/* <Item> */}
            <Front>
              <p>기분을 색상으로</p>
              <p>지정할 수 있다면</p>
              <p>기억날지도 몰라요!</p>
            </Front>
            <Back>
              <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Back>
            {/* </Item> */}
            {/* </Containeritem> */}
          </CardContainerOne>
        </ContainerTwo>
        <ContainerThree data-aos="fade-right" data-aos-delay="1000">
          <CardContainerOne>
            {/* <Containeritem> */}
            {/* <Item> */}
            <Front>
              <p>그 날의 감정을</p>
              <p>사진과 함께</p>
              <p>기록해 보세요</p>
            </Front>
            <Back>
              <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Back>
            {/* </Item> */}
            {/* </Containeritem> */}
          </CardContainerOne>
        </ContainerThree>

        <ContainerFour data-aos="fade-left" data-aos-delay="1500">
          <CardContainerOne>
            <p className="an">함께 시작해 볼까요?</p>
            <StartButton onClick={redirectUrl}>시작하기</StartButton>
          </CardContainerOne>
        </ContainerFour>
      </WholeContainerOne>

      <WholeContainerTwo data-aos="fade-up" data-aos-delay="1800" data-aos-offset="0">
        <p>Memori It 과 함께 당신의 추억을 기록해보세요</p>
        <LogoAnimation
          src="https://media.discordapp.net/attachments/924936549395750985/925241446292942848/memory-it-removebg-preview.png"
          onClick={redirectUrl}
        ></LogoAnimation>
      </WholeContainerTwo>
    </FirstContainer>
  )
}

export default LandingPage
