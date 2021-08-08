export function getMessageList(chatId) {
  return (state) => (state.messages[chatId] || [])
}