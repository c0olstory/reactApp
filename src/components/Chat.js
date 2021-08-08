import React from 'react'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router'

import MessageField from './MessageField'
import ChatsList from './ChatsList'
import { useSelector } from 'react-redux'
import { chatsSelector } from '../store/selectors/chats'

const useIsChatExist = ({ chatId }) => {
  // const chats = useSelector((state) => state.chats)
  const chats = useSelector(chatsSelector)


  return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}

const Chat = (props) => {
  const { onCurrentChatChange, currentChat } = props
  const { chatId } = useParams()

  const isChatExists = useIsChatExist({ chatId })
  if (!isChatExists) {
    return <Redirect to="/chats" />
  }

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__sidebar">
          <ChatsList
            onCurrentChatChange={onCurrentChatChange}
            currentChat={currentChat}
          />
        </div>
        <div className="app__main">
          <MessageField />
        </div>
      </div>
    </div>
  )

}

 export default Chat