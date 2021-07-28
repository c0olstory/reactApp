import './App.scss';
import React from 'react'
import UsersChats from './components/UsersChats'
import ChatItem from './components/ChatItem'
import Chat from './components/Chat'
import Router from './router/Router'
import { Link } from 'react-router-dom'



function App() {
  const [chats, setChats] = React.useState([
    { id: "chat1", name: 'Remy Sharp', img: './img/avatars/1.jpg' },
    { id: "chat2", name: 'Travis Howard', img: '../img/avatars/2.jpg' },
    { id: "chat3", name: 'Cindy Baker', img: '../img/avatars/3.jpg' },
  ])

  const [currentChat, setCurrentChat] = React.useState([0])

  const handleChangeChat = (chat) => setCurrentChat(chat)

  const handleIsChatExists = React.useCallback((chatId) => {
    return Boolean(chats.find((chat) => chat.id === chatId))
  })



  return (
    <>
      <header className="app__header header">
          <ul className="header__list">
            <li className="header__link">
              <Link to="/">Home</Link>
            </li>
            <li className="header__link">
              <Link to="/chats">Chats</Link>
            </li>
            <li className="header__link">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </header>
      <Router
        getIsChatExists = {handleIsChatExists}
        chats = {chats}
        currentChat = {currentChat}
        onCurrentChatChange = {handleChangeChat}
      />
    </>
  )
  //   <div className="app">
  //     <div className="app__content">
  //       <div className="app__sidebar">
  //         <UsersChats />
  //       </div>
  //       <div className="app__main">
  //         <ChatItem />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
