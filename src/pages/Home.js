import '../App.scss';
import React from 'react'
import UsersChats from '../components/UsersChats'
import ChatItem from '../components/ChatItem'
import Chat from '../components/Chat'


function Home(props) {
  // const [chats, setChats] = React.useState([])
  const {chats, currentChat, onCurrentChatChange} = props

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__sidebar">
          <UsersChats
            chats={chats}
            onCurrentChatChange={onCurrentChatChange}
            currentChat={currentChat}
          />
        </div>
        <div className="app__main">
          <ChatItem />
        </div>
      </div>
    </div>
  )
  
}

export default Home;
