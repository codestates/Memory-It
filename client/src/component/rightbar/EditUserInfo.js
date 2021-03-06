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
  height: 100%;
  font-size: 20px;
  text-align: center;
  justify-content: flex-start;
  padding-top: 80px;

  h3 {
    color: lightgray;
    margin-bottom: 5rem;
  }
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

const WithdrawalButton = styled.input`
  width: 80px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: tomato;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  }

  transition: 0.4s;
`

const EditUserInfo = () => {
  const navigate = useNavigate()
  const [usernameInputState, setUsernameInputState] = useState('?????????')
  const [passwordInputState, setPasswordInputState] = useState('')
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

  var regPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
  const onSave = async (ref1, ref2, target1, target2) => {
    ref1.style.display = 'none'
    ref2.style.display = 'block'
    target1.style.display = 'none'
    target2.style.display = 'block'

    if (!passwordInputState || !usernameInputState) {
      alertBox.current.classList.add('alert')
      setUserText('?????? ????????? ???????????????.')
    } else if (regPw.test(passwordInputState) === false) {
      alertBox.current.classList.add('alert')
      setUserText(
        '??????, ?????? ??? 1??? ??????, ????????? 2??? ?????? ???????????? 8?????? ?????? ??????????????????.'
      )
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_SERVE}/users/modifyUserInfo`,
          {
            username: usernameInputState,
            password: passwordInputState,
          },
          { withCredentials: true }
        )
        .then(res => {
          // console.log(res.data)
        })
        .catch(err => {
          console.log('server error')
        })
    }
  }

  // const onUsernameChange = e => {
  //   setUsernameInputState(e.target.value)
  // }

  const onPasswordChange = e => {
    setPasswordInputState(e.target.value)
    let words = ''
    for (let i = 0; i < passwordInputState.length; i++) {
      words = words + '*'
    }
    setPasswordFakeState(words)
  }

  // const handleInputValue = (e, key) => e => {
  //   setUserInfo({ ...userInfo, [key]: e.target.value })
  // }

  const onKeyDown = (e, ref1, ref2, target1, target2) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onSave(ref1, ref2, target1, target2)
    }
  }

  const withdrawalHandler = () => {
    if (
      confirm('????????????????????????? ???????????? ????????? ??????????????? ????????? ???????????? ????????????.')
    ) {
      axios
        .delete(`${process.env.REACT_APP_SERVE}/users/`, { withCredentials: true })
        .then(
          res => dispatch(changeToLoginFalse()),
          dispatch(welcomeMode()),
          navigate('/')
        )
        .catch(err => console.log(err))
    }
  }

  return (
    <Container>
      <h2>Setting</h2>
      <EditorWrapper>
        {/* <Before>??????</Before>
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
          ??????
        </EditBtn> */}
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
          ??????
        </EditBtnSave>
      </EditorWrapper>
      <EditorWrapper>
        <Before>????????????</Before>
        <Value type="password" ref={passwordValueRef}>
          {passwordFakeState}
        </Value>
        <InputBox
          ref={passwordInputRef}
          type="password"
          placeholder="???????????? ??????"
          // value={passwordInputState}
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
          ??????
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
          ??????
        </EditBtnSave>
      </EditorWrapper>
      <br></br>
      <div ref={alertBox}>{userText}</div>
      <br></br>
      <WithdrawalButton
        type="button"
        onClick={withdrawalHandler}
        value="?????? ??????"
      ></WithdrawalButton>
    </Container>
  )
}

export default EditUserInfo
