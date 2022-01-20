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
  overflow: scroll;
  background: rgb(248, 249, 250);
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
`
const ContainerOne = styled.div`
  width: 100%;
  height: 100%;
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
  background: #f4e12e;
  border-radius: 10px;
  box-shadow: rgba(244, 225, 46, 0.4) 5px 5px, rgba(244, 225, 46, 0.3) 10px 10px,
    rgba(244, 225, 46, 0.2) 15px 15px, rgba(244, 225, 46, 0.1) 20px 20px,
    rgba(244, 225, 46, 0.05) 25px 25px;
`
const CardContentOne = styled.div`
  width: 90%;
  height: 95%;
  background: #f4e12e;
  /* margin: 100px auto; */
  border-radius: 5px;
  padding: 20px 0px 0px 0px;
  transition: 0.3s all ease-in-out;
  margin: 0px 0px 0px 25px;
`

const ContainerTwo = styled(ContainerOne)``
const CardContainerTwo = styled(CardContainerOne)``
const CardTwo = styled(CardOne)`
  background: #6abf7d;
  box-shadow: rgba(106, 191, 125, 0.4) 5px 5px, rgba(106, 191, 125, 0.3) 10px 10px,
    rgba(106, 191, 125, 0.2) 15px 15px, rgba(106, 191, 125, 0.1) 20px 20px,
    rgba(106, 191, 125, 0.05) 25px 25px;
`
const CardContentTwo = styled(CardContentOne)`
  background: #6abf7d;
  padding: 70px 0px 0px 0px;
`

const ContainerThree = styled(ContainerOne)``
const CardContainerThree = styled(CardContainerOne)``
const CardThree = styled(CardOne)`
  background: #d12c2c;
  box-shadow: rgba(209, 44, 44, 0.4) 5px 5px, rgba(209, 44, 44, 0.3) 10px 10px,
    rgba(209, 44, 44, 0.2) 15px 15px, rgba(209, 44, 44, 0.1) 20px 20px,
    rgba(209, 44, 44, 0.05) 25px 25px;
`
const CardContentThree = styled(CardContentOne)`
  background: #d12c2c;
  padding: 40px 0px 0px 0px;
`

const ContainerFour = styled(ContainerOne)``
const CardContainerFour = styled(CardContainerOne)``
const CardFour = styled(CardOne)`
  background: #337bbd;
  box-shadow: rgba(51, 123, 189, 0.4) 5px 5px, rgba(51, 123, 189, 0.3) 10px 10px,
    rgba(51, 123, 189, 0.2) 15px 15px, rgba(51, 123, 189, 0.1) 20px 20px,
    rgba(51, 123, 189, 0.05) 25px 25px;
`
const CardContentFour = styled(CardContentOne)`
  background: #337bbd;
  padding: 60px 0px 0px 0px;
`
const WholeContainerTwo = styled.div`
  display: flex;
`
const ContainerFive = styled(ContainerOne)``
const CardContainerFive = styled(CardContainerOne)``
const CardFive = styled(CardOne)`
  background: #7e48b5;
  box-shadow: rgba(126, 72, 181, 0.4) 5px 5px, rgba(126, 72, 181, 0.3) 10px 10px,
    rgba(126, 72, 181, 0.2) 15px 15px, rgba(126, 72, 181, 0.1) 20px 20px,
    rgba(126, 72, 181, 0.05) 25px 25px;
`
const CardContentFive = styled(CardContentOne)`
  background: #7e48b5;
`

const Containeritem = styled.div`
  /* perspective: 300px; */
  /* text-align: center; */
`

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
  width: 100%;
  height: 80%;
  min-height: 290px;
  backface-visibility: hidden;
  transition: 3s;
  transform: rotateY(0deg);
  ${(Containeritem, Item)}:hover & {
    transform: rotateY(180deg);
    /* transform: translateY(0%);
    animation: ${hoverAnimation} 1s ease;
    animation-fill-mode: forwards;
    opacity: 1; */
  }
`

const Back = styled.div`
  position: absolute;
  /* left: 550px; */
  width: 100%;
  height: 70%;
  min-height: 290px;
  backface-visibility: hidden;
  transition: 3s;
  transform: rotateY(-180deg);
  ${(Containeritem, Item)}:hover & {
    transform: rotateY(0deg);
    /* transform: translateY(0%);
    animation: ${hoverAnimation} 1s ease;
    animation-fill-mode: forwards;
    opacity: 1; */
  }
`

const BackImage = styled.img`
  max-width: 300px;
`

const SlideIn = keyframes`
  /* 0%   {background-color:red; left:0px; top:0px;}
  100% {background-color:yellow; left:200px; top:0px;} */
  from {
    margin-left: 100%;
    width: 27%;
    transform: rotate(0deg);
  }

  to {
    margin-left: 0%;
    width: 27%;
    transform: rotate(360deg);
  }
`

const SlideInChangeShape = keyframes`
  /* 0%   {background-color:red; left:0px; top:0px;}
  100% {background-color:yellow; left:200px; top:0px;} */
  0% {
    margin-left: 100%;
    border-radius: 0%;
    top:0px
  
  }
  15% {
    margin-left: 100%;
    border-radius: 20%;
    top:25px
    
  }
  20% {
    margin-left: 100%;
    border-radius: 35%;
    top:75px
  
  }

  25% {
    margin-left: 100%;
    border-radius: 50%;
    top:100px
    
  }

  40% {
    margin-left: 65%;
    border-radius: 35%;
    top:50px
    
  }
  45% {
    margin-left: 55%;
    border-radius: 20%;
    top:25px
  
  }

  50% {
    margin-left: 50%;
    border-radius: 0%;
    top:0px

  }
  65%{
    margin-left: 35%;
    border-radius: 20%;
    top:25px
  }

  70%{
    margin-left: 30%;
    border-radius: 35%;
    top:35px
  }

  75% {
    margin-left: 25%;
    border-radius: 100%;
    top:50px

  }

  85%{
    margin-left: 15%;
    border-radius: 35%;
    top:35px
  }
  95%{
    margin-left: 5%;
    border-radius: 20%;
    top:25px
  }
  100% {
    margin-left: 0%;
    border-radius: 0%;
    top:0px

  }
`

// animation: loadingAnimation 2.5s infinite;
//   &.two {
//     animation-delay: 0.3s;
//   }
//   &.three {
//     animation-delay: 0.6s;
//   }
//   @keyframes loadingAnimation {
//     0% {
//       transform: scale(1, 1) translateY(0);
//     }
//     10% {
//       transform: scale(1.1, 0.9) translateY(0);
//     }
//     30% {
//       transform: scale(0.9, 1.1) translateY(-30px);
//     }
//     50% {
//       transform: scale(1.1, 0.9) translateY(0);
//     }
//     /* 57% {
//       transform: scale(1, 1) translateY(0);
//     } */
//     65% {
//       transform: scale(1, 1) translateY(0);
//     }
//     100% {
//       transform: scale(1, 1) translateY(0);
//     }
//   }
// `

const testing = keyframes`
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-30px);
    }
    50% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    /* 57% {
      transform: scale(1, 1) translateY(0);
    } */
    65% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }

`

const FadeInL = keyframes`
  /* 0%   {background-color:red; left:0px; top:0px;}
  100% {background-color:yellow; left:200px; top:0px;} */
  0% {opacity:0;}
  100% {opacity:1;}
`

const StartButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  width: 30%;
  height: 30%;
  min-height: 50px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 20px;
  border-radius: 0%;
  /* animation: 3s ease-in 1s infinite reverse both running slidein; */
  animation: ${SlideInChangeShape} 3s linear;
  animation-delay: -0.8s;
`

const AnimatedContainerFour = styled.div`
  animation: ${FadeInL} 6s;
`

const LogoAnimation = styled.img`
  max-width: 135px;
  animation: ${FadeInL} 2s;
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
            <CardOne>
              <CardContentOne>
                <Containeritem>
                  <Item>
                    <Front>
                      <h1>오늘 하루</h1>
                      <h1>기분은 어땠나요?</h1>
                      <h2>그럼 지난 달 둘째 주 수요일은요?</h2>
                    </Front>
                    <Back>
                      <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </Back>
                  </Item>
                </Containeritem>
              </CardContentOne>
            </CardOne>
          </CardContainerOne>
        </ContainerOne>

        <ContainerTwo data-aos="fade-left" data-aos-delay="1000">
          <CardContainerTwo>
            <CardTwo>
              <CardContentTwo>
                <Containeritem>
                  <Item>
                    <Front>
                      <h1>기분을 색상으로</h1>
                      <h1>지정할 수 있다면</h1>
                      <h1>기억날지도 몰라요!</h1>
                    </Front>
                    <Back>
                      <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </Back>
                  </Item>
                </Containeritem>
              </CardContentTwo>
            </CardTwo>
          </CardContainerTwo>
        </ContainerTwo>

        <ContainerThree data-aos="fade-right" data-aos-delay="2000">
          <CardContainerThree>
            <CardThree>
              <CardContentThree>
                <Containeritem>
                  <Item>
                    <Front>
                      <h1>그 날의 감정을</h1>
                      <h1>사진과 함께</h1>
                      <h1>기록해 보세요</h1>
                    </Front>
                    <Back>
                      <BackImage src="https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </Back>
                  </Item>
                </Containeritem>
              </CardContentThree>
            </CardThree>
          </CardContainerThree>
        </ContainerThree>

        {/* <ContainerFour data-aos="fade-left" data-aos-delay="3000"> */}
        <ContainerFour>
          <CardContainerFour>
            <CardFour>
              <CardContentFour>
                <h1>함께 시작해 볼까요?</h1>
                <StartButton>시작하기</StartButton>
              </CardContentFour>
            </CardFour>
          </CardContainerFour>
        </ContainerFour>
      </WholeContainerOne>

      <WholeContainerTwo>
        <ContainerFive>
          <CardContainerFive data-aos="fade-down">
            <CardFive data-aos="fade-down">
              <CardContentFive data-aos="fade-down">
                <h1 data-aos="fade-down">Memori It 과 함께 당신의 추억을 기록해보세요</h1>
                <LogoAnimation
                  src="https://media.discordapp.net/attachments/924936549395750985/925241446292942848/memory-it-removebg-preview.png"
                  onClick={redirectUrl}
                ></LogoAnimation>
              </CardContentFive>
            </CardFive>
          </CardContainerFive>
        </ContainerFive>
      </WholeContainerTwo>
    </FirstContainer>
  )
}

export default LandingPage
