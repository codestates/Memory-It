import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { welcomeMode, changeToLoginFalse } from '../../actions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 20px;
  text-align: center;
  background-color: white;
  /* background-color: transparent; */
  padding-top: 80px;

  h3 {
    color: lightgray;
    margin-bottom: 5rem;
  }

  /* @media screen and (max-width: 320px) {
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
  } */
`

const EditorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px lightgray solid;
`
const Before = styled.div`
  width: 25%;
  text-align: start;
  font-weight: bold;
`
const Value = styled.div`
  width: 55%;
  text-align: start;
  font-size: 1rem;
  padding-left: 3px;
`

const InputBox = styled.input`
  @media screen and (max-width: 320px) {
    margin: 10px;
  }
  display: none;
  border: 1px lightgray solid;
  outline: none;
  width: 45%;
  height: 100%;
  margin-right: 10%;
  font-size: 1rem;
`
const EditBtn = styled.button`
  @media screen and (max-width: 320px) {
    margin-top: 10px;
  }
  background: transparent;
  width: 20%;
  height: 35px;
  cursor: pointer;
  letter-spacing: 2px;
  font-weight: bold;
  border: none;
  color: #ff9900;
`

const EditBtnSave = styled(EditBtn)`
  display: none;
  background: transparent;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  color: inherit;
  font-size: 1rem;
  background: #ff9900;
  color: white;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.22);
  transition: 0.2s ease;
  &:hover {
    box-shadow: 2px 4px 3px -2px rgba(0, 0, 0, 0.22);
  }
`

const EditUserInfo = () => {
  // const [username, setUsername] = useState('킴코댕')
  const navigate = useNavigate()
  const [usernameInputState, setUsernameInputState] = useState('킴코댕')
  const [passwordInputState, setPasswordInputState] = useState('11@@qqww')
  const [passwordFakeState, setPasswordFakeState] = useState('********')

  const dispatch = useDispatch()

  const usernameRef = useRef(null)
  const saveUsernameRef = useRef(null)
  const passwordRef = useRef(null)
  const savePasswordRef = useRef(null)

  const usernameValueRef = useRef(null)
  const usernameInputRef = useRef(null)
  const passwordValueRef = useRef(null)
  const passwordInputRef = useRef(null)

  const alertBox = useRef()

  const [userText, setUserText] = useState('')
  // const [userInfo, setUserInfo] = useState({
  //   username: '',
  //   password: '',
  // })

  useEffect(() => {
    setUserText('')
    alertBox.current.classList.remove('alert')
  }, [usernameInputState, passwordInputState])

  const handleEdit = () => {
    dispatch(welcomeMode())
  }

  const onEditMode = (ref1, ref2, target1, target2) => {
    ref1.style.display = 'none'
    ref2.style.display = 'block'
    target1.style.display = 'none'
    target2.style.display = 'block'
  }

  // axios.defaults.withCredentials = true

  var regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
  const onSave = async (ref1, ref2, target1, target2) => {
    ref1.style.display = 'none'
    ref2.style.display = 'block'
    target1.style.display = 'none'
    target2.style.display = 'block'
    // if (!usernameInputState.length) return
    // else setUsername(usernameInputState)
    // const { username, password } = userInfo
    if (!passwordInputState || !usernameInputState) {
      alertBox.current.classList.add('alert')
      setUserText('모든 항목은 필수입니다.')
    } else if (regPw.test(passwordInputState) === false) {
      alertBox.current.classList.add('alert')
      setUserText(
        '숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력하십시오.'
      )
    } else {
      await axios
        .post(
          'http://localhost:8081/users/modifyUserInfo',
          {
            username: usernameInputState,
            password: passwordInputState,
          },
          { withCredentials: true }
        )
        .then(res => {
          // console.log(res)
          console.log(res.data)

          // setUsername(usernameInputState)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const onUsernameChange = e => {
    setUsernameInputState(e.target.value)
  }

  // console.log(usernameInputState)

  const onPasswordChange = e => {
    setPasswordInputState(e.target.value)
    let words = ''
    for (let i = 0; i < passwordInputState.length; i++) {
      words = words + '*'
    }
    setPasswordFakeState(words)
  }

  const handleInputValue = (e, key) => e => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }

  const onKeyDown = (e, ref1, ref2, target1, target2) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onSave(ref1, ref2, target1, target2)
    }
  }

  const withdrawalHandler = () => {
    if (
      confirm('탈퇴하시겠습니까? 지금까지 저장한 다이어리는 탈퇴시 복구되지 않습니다.')
    ) {
      // axios.delete()
      console.log('진짜네 ㅎㅎ')
      axios
        .delete('http://localhost:8081/users/', { withCredentials: true })
        .then(
          res => console.log(res),
          dispatch(changeToLoginFalse()),
          dispatch(welcomeMode()),
          navigate('/')
        )
        .catch(err => console.log(err))
    }
  }

  return (
    <Container>
      <h2>Setting</h2>
      {/* <h3>어떤 영화가 떠오르지 않으시나요?</h3> */}
      <EditorWrapper>
        <Before>이름</Before>
        <Value ref={usernameValueRef}>{usernameInputState}</Value>
        <InputBox
          ref={usernameInputRef}
          type="text"
          placeholder={usernameInputState}
          value={usernameInputState}
          onChange={e => onUsernameChange(e)}
          onKeyDown={e =>
            onKeyDown(
              e,
              saveUsernameRef.current,
              usernameRef.current,
              usernameInputRef.current,
              usernameValueRef.current
            )
          }
        />
        <EditBtn
          ref={usernameRef}
          onClick={() =>
            onEditMode(
              usernameRef.current,
              saveUsernameRef.current,
              usernameValueRef.current,
              usernameInputRef.current
            )
          }
        >
          수정
        </EditBtn>
        <EditBtnSave
          ref={saveUsernameRef}
          onClick={() =>
            onSave(
              saveUsernameRef.current,
              usernameRef.current,
              usernameInputRef.current,
              usernameValueRef.current
            )
          }
        >
          저장
        </EditBtnSave>
      </EditorWrapper>
      <EditorWrapper>
        <Before>비밀번호</Before>
        <Value type="password" ref={passwordValueRef}>
          {passwordFakeState}
        </Value>
        <InputBox
          ref={passwordInputRef}
          type="password"
          placeholder="비밀번호 변경"
          value={passwordInputState}
          onChange={e => onPasswordChange(e)}
          onKeyDown={e =>
            onKeyDown(
              e,
              savePasswordRef.current,
              passwordRef.current,
              passwordInputRef.current,
              passwordValueRef.current
            )
          }
        />
        <EditBtn
          ref={passwordRef}
          onClick={() =>
            onEditMode(
              passwordRef.current,
              savePasswordRef.current,
              passwordValueRef.current,
              passwordInputRef.current
            )
          }
        >
          수정
        </EditBtn>
        <EditBtnSave
          ref={savePasswordRef}
          onClick={() =>
            onSave(
              savePasswordRef.current,
              passwordRef.current,
              passwordInputRef.current,
              passwordValueRef.current
            )
          }
        >
          저장
        </EditBtnSave>
      </EditorWrapper>
      <br></br>
      <div ref={alertBox}>{userText}</div>
      <br></br>
      <input type="button" onClick={withdrawalHandler} value="회원탈퇴"></input>
    </Container>
  )
}

export default EditUserInfo
