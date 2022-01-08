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

export const CONTACT_US_PAGE = 'contact_us_page'

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

export const detailedPostMode = () => {
  return {
    type: DETAILED_POST_MODE,
    payload: {
      rightBar: 'detailed_post',
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
