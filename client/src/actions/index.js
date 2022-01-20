// action types
// login 상태 변경
export const CHANGE_TO_LOGIN_TRUE = 'CHANGE_TO_LOGIN_TRUE'
export const CHANGE_TO_LOGIN_FALSE = 'CHANGE_TO_LOGIN_TRUE'

// 가운데 포스트 상태 변경
export const CHANGE_TO_DIARY_TRUE = 'CHANGE_TO_DIARY_TRUE'
export const CHANGE_TO_DIARY_FALSE = 'CHANGE_TO_DIARY_FALSE'

// 우측게시물 상태 변경
export const CREATE_POST_MODE = 'CREATE_POST_MODE'
export const MODIFY_PROFILE_MODE = 'MODIFY_PROFILE_MODE'
export const DETAILED_POST_MODE = 'DETAILED_POST_MODE'
export const WELCOME_MODE = 'WELCOME_MODE'
export const POSTING_MAP_MODE = 'POSTING_MAP_MODE'

// 이미지 변경
export const CHANGE_IMAGE = 'CHANGE_IMAGE'
export const CONTACT_US_PAGE = 'contact_us_page'

// 해 선택
export const CHANGE_YEAR = 'CHANGE_YEAR'

// 지도 위치 변경
export const CHANGE_LAT = 'CHANGE_LAT'
export const CHANGE_LNG = 'CHANGE_LNG'

//postId 변경
export const CHANGE_POSTID = 'CHANGE_POSTID'

//postInfo 변경
export const CHANGE_POSTINFO = 'CHANGE_POSTINFO'

//postImage 메인 사진 변경
export const CHANGE_POSTIMAGE = 'CHANGE_POSTIMAGE'

// DiaryType 포스트 상태 변경
export const CHANGE_USER_POST = 'CHANGE_USER_POST'

// 감정 필터링 기능
export const FILTER_EMOTION = 'FILTER_EMOTION'

// actions creater functions(액션 생성 함수)
export const changeToLoginTrue = () => {
  return {
    type: CHANGE_TO_LOGIN_TRUE,
    payload: {
      isLogin: true,
    },
  }
}

export const changeToLoginFalse = () => {
  return {
    type: CHANGE_TO_LOGIN_FALSE,
    payload: {
      isLogin: false,
    },
  }
}

export const changeToDiaryTrue = () => {
  return {
    type: CHANGE_TO_DIARY_TRUE,
    payload: {
      isDiary: true,
    },
  }
}

export const changeToDiaryFalse = () => {
  return {
    type: CHANGE_TO_DIARY_FALSE,
    payload: {
      isDiary: false,
    },
  }
}

export const createPostMode = () => {
  return {
    type: CREATE_POST_MODE,
    payload: {
      rightBar: 'create_post',
    },
  }
}

export const modifyProfileMode = () => {
  return {
    type: MODIFY_PROFILE_MODE,
    payload: {
      rightBar: 'modify_profile',
    },
  }
}

export const contactUs = () => {
  return {
    type: CONTACT_US_PAGE,
    payload: {
      rightBar: 'contact_us',
    },
  }
}

export const detailedPostMode = (
  id,
  mainImage,
  emotion,
  marker,
  content,
  lat,
  lng,
  allImage,
  createdAt
) => {
  return {
    type: DETAILED_POST_MODE,
    payload: {
      rightBar: 'detailed_post',
      id,
      mainImage,
      emotion,
      marker,
      content,
      lat,
      lng,
      allImage,
      createdAt,
    },
  }
}

export const welcomeMode = () => {
  return {
    type: WELCOME_MODE,
    payload: {
      rightBar: 'welcome',
    },
  }
}

export const changeImage = image => {
  return {
    type: CHANGE_IMAGE,
    payload: {
      picture: image,
    },
  }
}

export const changeLat = lat => {
  return {
    type: CHANGE_LAT,
    payload: {
      lat: lat,
    },
  }
}

export const changeLng = lng => {
  return {
    type: CHANGE_LNG,
    payload: {
      lng: lng,
    },
  }
}

export const changePostId = postId => {
  return {
    type: CHANGE_POSTID,
    payload: {
      postId: postId,
    },
  }
}

export const changePostInfo = postInfo => {
  return {
    type: CHANGE_POSTINFO,
    payload: {
      postInfo: postInfo,
    },
  }
}

export const changePostImage = postImage => {
  return {
    type: CHANGE_POSTIMAGE,
    payload: {
      postImage: postImage,
    },
  }
}

export const postingmapMode = (data, postingImages) => {
  return {
    type: POSTING_MAP_MODE,
    payload: {
      rightBar: 'posting_map',
      data,
      postingImages,
    },
  }
}

export const changeUserPost = (n, month, monthCode) => {
  return {
    type: CHANGE_USER_POST,
    payload: {
      userPostAPI: `${process.env.REACT_APP_SERVE}/posts?type=diary&month=${n}&year=2022`,
      month,
      monthCode,
    },
  }
}

export const changeYear = year => {
  return {
    type: CHANGE_YEAR,
    payload: {
      year,
      userPostAPI: `${process.env.REACT_APP_SERVE}/posts?type=diary&month=1&year=${year}`,
    },
  }
}

export const filterEmotion = emotion => {
  return {
    type: FILTER_EMOTION,
    payload: {
      emotion,
    },
  }
}
