import React from "react"
import styled from "styled-components"
import addPost from '../../static/addPost.png'

const Guide = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-family: serif;
  font-weight: bold;
  text-align: center;
  width: 20rem;
  height: 27rem;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  margin: 1.3rem;
  padding: 1vw;
  float: left;
`

const CaseOfArticleFalse = () => {
  return (
    <>
      <Guide>
        <h1 >Memory It <br />시작하기</h1>
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
        <h1>게시물위에<br /> 마우스 커서를 얹어보세요!</h1>
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

  )

}

export default CaseOfArticleFalse