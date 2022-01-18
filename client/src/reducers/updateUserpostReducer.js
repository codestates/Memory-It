import { UPDATE_USERPOST } from '../actions/userPostAction'

const initialPostState = {
  userPost: [
    {
      content: "치킨치킨",
      createdAt: "2022-01-18T00:00:00.000Z",
      emotions: [1],
      id: 1,
      images: "https://user-images.githubusercontent.com/85774603/149934897-63cfa04f-3e26-4a7e-8d49-b00bfb978d59.gif",
      lat: 126.82327197207773, 
      lng: 37.48355774542228,
      marker: 1
    },
    
  ]
}

const updateUserpostReducer = (state = initialPostState, action) => {

  switch (action.type) {
  case UPDATE_USERPOST:
    return Object.assign({}, state, {
      userPost: action.payload.userPost
    })

  default:
    return state
  }
}

export default updateUserpostReducer