import { combineReducers, createStore } from 'redux'
// import { persistReducer, persistStore } from 'redux-persist'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import messagesReducer from './reducers/messages'



// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// )




const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)