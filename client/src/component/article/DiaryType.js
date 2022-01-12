import { React, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { changeImage, detailedPostMode } from '../../actions/index'
import dummydata from '../../dummy/dummydata'
import { useSelector, useDispatch } from 'react-redux'
import yellowMood from '../../static/yellowMood.png'
import greenMood from '../../static/greenMood.png'
import redMood from '../../static/redMood.png'
import blueMood from '../../static/blueMood.png'
import violetMood from '../../static/violetMood.png'
import { v4 } from 'uuid'

const Posts = styled.div`
  @media only screen and (max-width: 965px) {
    justify-content: center;
    padding-left: 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 1rem;
  padding-left: 7%;
`

const CreatedAt = styled.span`
  text-align: left;
  margin: 0.5rem 1rem;
`

const DetailedMood = styled.span`
  text-align: right;
  margin: 0.5rem;
`
const Mood = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

const Picture = styled.div`
  background: url(${props => props.imageSrc || null});
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: 1s;
  &:hover {
    transition: 3s;
    background-size: 110% 110%;
  }
`
const PictureWrapper = styled.div`
  @media only screen and (max-width: 1180px) {
    height: calc(50vw - 40%);
  }
  @media only screen and (max-width: 965px) {
    max-width: 22rem;
    width: 86%;
    height: calc(50vw - 10%);
  }
  @media only screen and (max-width: 670px) {
    width: 80%;
    height: 24rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  height: calc(50vw - 54%);
  border-radius: 20px;
  margin: 1rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 1481px) {
    width: 28%;
    height: calc(50vw - 75%);
  }
`

const DiaryType = () => {
  const dispatch = useDispatch()
  const [isHovers, setIsHovers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  })

  const [data, setData] = useState([])
  useEffect(async () => {
    await axios
      .get('http://localhost:8081/posts?type=diary&year=2022', {
        withCredentials: true,
      })
      .then(res => {
        setData(res.data.data)
      })
  }, [])
  // const inputData = () => {
  //   if (!data.hasOwnProperty('src')) {
  //     data = dummydata
  //   }
  // }

  const moods = picture => {
    let mood = []

    for (let i = 0; i < picture.length; i++) {
      if (picture[i] === 1) {
        mood.push(<Mood src={yellowMood} />)
      }
      if (picture[i] === 2) {
        mood.push(<Mood src={greenMood} />)
      }
      if (picture[i] === 3) {
        mood.push(<Mood src={redMood} />)
      }
      if (picture[i] === 4) {
        mood.push(<Mood src={blueMood} />)
      }
      if (picture[i] === 5) {
        mood.push(<Mood src={violetMood} />)
      }
    }
    return mood
  }

  return (
    <Posts>
      {/* {inputData()} */}
      {data.map(post => (
        <PictureWrapper
          key={v4()}
          onClick={() => {
            dispatch(changeImage(post))
            dispatch(detailedPostMode())
            // 리덕스 스토리지에 posId 값저장
            // 일반 변수와 state 차이???

            /*
            위 예제는 state를 만들 때 array 자료형을 집어넣었고,

{} 중괄호를 이용해 원하는 곳에 state 데이터들을 바인딩했습니다.

state도 만드는 과정이 귀찮아서 그렇지 용도는 그냥 변수랑 똑같습니다.

그럼 변수 만들어 쓰면 되는거지 왜 굳이 state 만들어쓰냐고요?

 

 

 

 

 

변수 말고 state에 데이터 저장해서 쓰는 이유

 

힘들게 state를 만들어 써야하는 이유는 이겁니다.

"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"

그럴 때 변수 말고 state에 저장해서 데이터바인딩 하셔야합니다.


리액트는 state가 수정이 일어나면

state가 포함된 HTML을 자동으로 재렌더링 해줍니다.
https://codingapple.com/unit/react-3-state-usestate-hook/


            */
          }}
          onMouseEnter={() => {
            setIsHovers({ ...isHovers, [post.id]: true })
          }}
          onMouseLeave={() => {
            setIsHovers({ ...isHovers, [post.id]: false })
          }}
        >
          <Picture imageSrc={post.images} />
        </PictureWrapper>
      ))}
    </Posts>
  )
}

export default DiaryType
