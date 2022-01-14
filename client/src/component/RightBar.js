import React from 'react'
import DefaultRightBar from './rightbar/DefaultRightBar'
import EditUserInfo from './rightbar/EditUserInfo'
import DetailedPost from './rightbar/DetailedPost'
// import ResponseTester from '../servertest/multer'
import { useSelector } from 'react-redux'
import ContactUs from './rightbar/contactUs'
import PostingMap from './rightbar/PostingMap'
import CreatePost from './rightbar/CreatePost'

function RightBar() {
  const state = useSelector(state => state.rightbarReducer)
  const { rightBar } = state

  const caseOfRightBar = () => {
    if (rightBar === 'create_post') {
      return <CreatePost />
    } else if (rightBar === 'modify_profile') {
      return <EditUserInfo />
    } else if (rightBar === 'detailed_post') {
      return <DetailedPost />
    } else if (rightBar === 'contact_us') {
      return <ContactUs />
    } else if (rightBar === 'posting_map') {
      return <PostingMap />
    } else {
      return <DefaultRightBar />
    }
  }

  return <>{caseOfRightBar()}</>
}

export default RightBar
