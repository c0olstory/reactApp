import  { CHANGE_NAME } from './actions'
import  { CHANGE_CHECKBOX } from './actions'

const initialState = {
  name: 'Unknown', 
  age: 22,
  check: true,
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
    default: 
      return state
  }
}