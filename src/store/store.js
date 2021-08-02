import { combineReducers, createStore } from 'redux'
import profileReducer from './profile/reducers'
import chatsReducer from './chats/reducers'

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)