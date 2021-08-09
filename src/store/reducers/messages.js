import { AUTHORS } from '../../components/constants'
import { ADD_MESSAGE } from '../actions/messages'

const initialState = {
  'chat1': [
    {id: 'message1', text: 'privet', author: AUTHORS.Me},
    {id: 'message2', text: 'privet2', author: AUTHORS.Bot}
  ]
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...(state[action.payload.chatId] || []),
          action.payload.message
        ]
      }
    }
    default:
      return state
  }
};

export default messagesReducer