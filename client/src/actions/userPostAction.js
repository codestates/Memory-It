export const UPDATE_USERPOST = 'UPDATE_USERPOST'

export const updateUserpost = posts => {
  return {
    type: UPDATE_USERPOST,
    payload: {
      userPost: posts,
    },
  }
}