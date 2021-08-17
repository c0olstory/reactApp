import  { CHANGE_NAME, CHANGE_CHECKBOX, CHANGE_IS_AUTHED } from '../actions/profile'

const initialState = {
  name: 'Alex', 
  age: 22,
  check: true,
  isAuthed: false,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.name
      }
    }
    case CHANGE_CHECKBOX: {
      return {
        ...state,
        check: action.payload.check
      }
    }
    case CHANGE_IS_AUTHED: {
      return {
        ...state,
        isAuthed: action.payload.isAuthed
      }
    }
    default: 
      return state
  }
}