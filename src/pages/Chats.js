import React from 'react'
import ChatsList from '../components/ChatsList'


function Chats(props) {

  return (
    <div className="app">
      <div className="app__content">
        <ChatsList />
      </div>
    </div>
  )
}

export default Chats