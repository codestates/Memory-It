// action types
// login 상태 변경 
export const CHANGE_TO_LOGIN_TRUE = 'CHANGE_TO_LOGIN_TRUE'
export const CHANGE_TO_LOGIN_FALSE = 'CHANGE_TO_LOGIN_TRUE'
// 게시물 상태 변경 
export const CREATE_POST_MODE = 'CREATE_POST_MODE'
export const MODIFY_PROFILE_MODE = 'MODIFY_PROFILE_MODE'
export const DETAILED_POST_MODE = 'DETAILED_POST_MODE'
export const WELCOME_MODE = 'WELCOME_MODE'

// actions creater functions(액션 생성 함수)
export const changeToLoginTrue = () => {
  return {
    type: CHANGE_TO_LOGIN_TRUE,
    payload: {
      isLogin: true
    }
  }
}

export const changeToLoginFalse = () => {
  return {
    type: CHANGE_TO_LOGIN_FALSE,
    payload: {
      isLogin: false
    }
  }
}

export const createPostMode = () => {
  return {
    type: CREATE_POST_MODE,
    payload: {
      rightBar: 'create_post'
    }
  }
}

export const modifyProfileMode = () => {
  return {
    type: MODIFY_PROFILE_MODE,
    payload: {
      rightBar: 'modify_profile'
    }
  }
}

export const detailedPostMode = () => {
  return {
    type: DETAILED_POST_MODE,
    payload: {
      rightBar: 'detailed_post'
    }
  }
}

export const welcomeMode = () => {
  return {
    type: WELCOME_MODE,
    payload: {
      rightBar: 'welcome'
    }
  }
}