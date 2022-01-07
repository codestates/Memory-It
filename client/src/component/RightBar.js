import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import DefaultRightBar from './rightbar/DefaultRightBar'
import ModifyUserInfo from './rightbar/ModifyUserInfo'
import DetailedPost from './rightbar/DetailedPost'
import ResponseTester from '../servertest/multer'
import { welcomeMode } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

function RightBar () {
  const state = useSelector(state => state.rightbarReducer)
  const { rightBar } = state
  const dispatch = useDispatch()
  
  const caseOfRightBar = () => {
    if (rightBar === 'create_post') {
      return (
        <ResponseTester />
      )
    } else if (rightBar === 'modify_profile') {
      return (
        <ModifyUserInfo />
      )
    } else if (rightBar === 'detailed_post') {
      return (
        <DetailedPost />
      )
    } else {
      return (
        <DefaultRightBar />
      )
    }
 
  }

  return (
    <>    
      {caseOfRightBar()}
    </>
  )
}

export default RightBar