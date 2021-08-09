import { AUTHORS } from "../../components/constants"

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  }
})

export const sendMessageToBot = (chatId, message) => {
  return (dispatch, getState) =>{
    dispatch(addMessage(chatId, message))

    let timer = setTimeout(() => {
      dispatch(addMessage(chatId, {
        id: `message${Date.now()}`,
        author: AUTHORS.Bot,
        text: 'Сообщение отправлено'
      }))
      clearTimeout(timer)
    }, 2000)
  }
}
