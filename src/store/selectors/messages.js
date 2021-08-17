export function getMessageList(chatId) {
  return (state) => (state.messages[chatId] || [])
}

// export function getLastMessage(chatId) {
//   return (state) => (state.messages[chatId] || [])
// }