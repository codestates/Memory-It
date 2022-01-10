import React from 'react'
import DefaultRightBar from './rightbar/DefaultRightBar'
import ModifyUserInfo from './rightbar/ModifyUserInfo'
import DetailedPost from './rightbar/DetailedPost'
import ResponseTester from '../servertest/multer'
import { useSelector } from 'react-redux'
import ContactUs from './rightbar/contactUs'

function RightBar() {
  const state = useSelector(state => state.rightbarReducer)
  const { rightBar } = state

  const caseOfRightBar = () => {
    if (rightBar === 'create_post') {
      return <ResponseTester />
    } else if (rightBar === 'modify_profile') {
      return <ModifyUserInfo />
    } else if (rightBar === 'detailed_post') {
      return <DetailedPost />
    } else if (rightBar === 'contact_us') {
      return <ContactUs />
    } else {
      return <DefaultRightBar />
    }
  }

  return <>{caseOfRightBar()}</>
}

export default RightBar
