import { AUTHORS } from "../../components/constants"
import firebase from "firebase"

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  }
})

// export const sendMessageToBot = (chatId, message) => {
//   return (dispatch, getState) =>{
//     dispatch(addMessage(chatId, message))

//     let timer = setTimeout(() => {
//       dispatch(addMessage(chatId, {
//         id: `message${Date.now()}`,
//         author: AUTHORS.Bot,
//         text: 'Сообщение отправлено'
//       }))
//       clearTimeout(timer)
//     }, 2000)
//   }
// }

export const sendMessageToBot = (chatId, message) => {
  return () => {
      firebase.database().ref('messages').child(chatId).push(message)

      let timer = setTimeout(() => {
          firebase
              .database()
              .ref('messages')
              .child(chatId)
              .push({
                  id: `message${Date.now()}`,
                  author: AUTHORS.Bot,
                  text: 'Сообщение отправлено',
              })

          clearTimeout(timer)
      }, 1500)
  }
}

export const subscribeOnMessagesChangings = (chatId) => {
  return (dispatch, getState) => {
      firebase
          .database()
          .ref('messages')
          .child(chatId)
          .on('child_added', (snapshot) => {
              console.log('child_added', snapshot.val())

              dispatch(addMessage(chatId, snapshot.val()))
          })

      firebase
          .database()
          .ref('messages')
          .child(chatId)
          .on('child_changed', (snapshot) => {
              console.log('child_changed', snapshot.val())

              dispatch(addMessage(chatId, snapshot.val()))
          })
  }
}