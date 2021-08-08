import React from 'react'
import ChatsList from '../components/ChatsList'


function Chats(props) {
  const { onCurrentChatChange, currentChat } = props

  return (
    <div className="app">
      <div className="app__content">
        <ChatsList
          onCurrentChatChange={onCurrentChatChange}
          currentChat={currentChat}
        />
      </div>
    </div>
  )
}

export default Chats