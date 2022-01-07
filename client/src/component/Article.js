import React from 'react'
import styled from 'styled-components'
import dummydata from '../dummy/dummydata'
import addPost from '../static/addPost.png'
import { useSelector } from 'react-redux'
import MapType from './MapType' 
import './article.css'

const Posts = styled.article`
  text-align: center;  
`
// isLogin = false
const Guide = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-family: serif;
  font-weight: bold;
  width: 19vw;
  height: 23vw;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  margin: 2vw;
  padding: 1vw;
  float: left;
`


// isLogin = true
const Picture = styled.img` 
  width: 19vw;
  margin: 2vw;
`
function Article () {

  const state = useSelector(state => state.loginReducer)
  const postState = useSelector(state => state.postReducer)
  const { isLogin } = state
  const { isDiary } = postState

  const caseOfArticle = () => {
    if (isLogin) {
      if (isDiary) {
        return (
          <Posts>
            {dummydata.map(post => (
              <Picture key={post.id} src={post.src} />
            ))}
          </Posts>
        )
      } else {
        return (
          <MapType />
        )
      }
    } else {
      <>
        <Guide>
          <h1 >Memory It 시작하기</h1>
          오늘 하루 기분은 어땠나요?<br />
          궁금해지네요<br />
          그럼 지난달 둘째 주 수요일은요?<br /><br />
          <p>기분을 색상으로 저장할 수 있다면 기억날지도 몰라요!</p>
          함께 시작해볼까요?
        </Guide>
        <Guide>
          <h1><img id='addPost' src={addPost} />를 눌러<br /> 시작할 수 있습니다.</h1>
          사진을 찍은 곳을<br /> 지도에 표시해 보세요<br />
          간단한 글과 함께 올려도 좋아요
        </Guide>
        <Guide>
          <h1>게시물위에 마우스 커서를 얹어보세요!</h1>
          작성한 날짜<br />
          그리고<br />
          그날의 감정이 보일거에요
        </Guide>
        <Guide>
          <h1>게시물을 클릭해 보세요!</h1>
          기록했던 내용과<br />
          그날 갔던곳을<br />
          볼 수 있을거에요
        </Guide>
      </>

    }

  }


  return (
    <>
      {caseOfArticle()}
    </>
  )
}


export default Article