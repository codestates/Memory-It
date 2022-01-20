import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { changeToLoginTrue, changeToDiaryTrue, welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import './Body.css'
import './SnsLoading.css'

import axios from 'axios'

const Sns = () => {
  const navigate = useNavigate()
  const state = useSelector(state => state.loginReducer)

  const dispatch = useDispatch()

  const url = new URL(window.location.href)
  const authorizationCode = url.searchParams.get('code')
  const stateCode = url.searchParams.get('state')

  //받은 authorization 코드이용 서버로 callback api 요청
  const getAccessTocken = async authorizationCode => {
    await axios
      .post(
        'http://localhost:8081/snslogin/gettoken',
        { authorizationCode: authorizationCode, stateCode: stateCode },
        {
          withCredentials: true,
        }
      )
      .then(res => {
        getSnsInfo()
      })
      .catch(err => {
        alert('서버로부터 응답이 없습니다. 나중에 다시 시도해주세요')
      })
  }

  const getSnsInfo = async () => {
    await axios
      .get('http://localhost:8081/snslogin/getuserinfo', { withCredentials: true })
      .then(res => {
        dispatch(changeToLoginTrue())
        dispatch(changeToDiaryTrue())
        dispatch(welcomeMode())
        navigate('/')
      })
      .catch(err => {
        alert('서버로부터 응답이 없습니다. 나중에 다시 시도해주세요')
      })
  }

  useEffect(() => {
    getAccessTocken(authorizationCode)
  }, [])

  return (
    <div className="loading-box">
      <div className="circles">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <p>Loading...</p>
    </div>
  )
}

export default Sns
